let userFeatures = {
  // All numeric value (All binary except seniority_level)
  // Seniority
  seniority_level: 0,
  // Job Title
  "job_title_data scientist": 0,
  "job_title_machine learning engineer": 0,
  // Status
  status_hybrid: 0,
  "status_on-site": 0,
  status_remote: 0,
  // Industry
  industry_Education: 0,
  industry_Energy: 0,
  industry_Finance: 0,
  industry_Healthcare: 0,
  industry_Logistics: 0,
  industry_Manufacturing: 0,
  industry_Retail: 0,
  industry_Technology: 0,
  // Ownership
  ownership_Private: 0,
  ownership_Public: 0,

  // Continent
  continent_Asia: 0,
  continent_Europe: 0,
  "continent_North America": 0,
  continent_Others: 0,
  // Countries
  country_AT: 0,
  country_AU: 0,
  country_BR: 0,
  country_CA: 0,
  country_CH: 0,
  country_CN: 0,
  country_DE: 0,
  country_DK: 0,
  country_EE: 0,
  country_ES: 0,
  country_FR: 0,
  country_GB: 0,
  country_IE: 0,
  country_IN: 0,
  country_IT: 0,
  country_JP: 0,
  country_NL: 0,
  country_SE: 0,
  country_SG: 0,
  country_TW: 0,
  country_US: 0,
  // Skills
  spark: 0,
  r: 0,
  python: 0,
  scala: 0,
  "machine learning": 0,
  tensorflow: 0,
  sql: 0,
  aws: 0,
  git: 0,
  docker: 0,
  gcp: 0,
  kubernetes: 0,
  "deep learning": 0,
  "scikit-learn": 0,
  pytorch: 0,
  keras: 0,
  java: 0,
  pandas: 0,
  powerbi: 0,
  tableau: 0,
  hadoop: 0,
  azure: 0,
  airflow: 0,
  numpy: 0,
  "neural network": 0,
  matplotlib: 0,
  database: 0,
  amazon: 0,
  scipy: 0,
  linux: 0,
  bash: 0,
  opencv: 0,
  sklearn: 0,
};

const skillSets = Object.keys(userFeatures).slice(41);
console.log(skillSets);

const skillColumn = document.querySelector(".column2");
skillColumn.innerHTML = "<h3>Skillset you can offer</h3>";
skillSets.forEach((skill) => {
  const container = document.createElement("label");
  container.classList.add("skill-container");
  container.innerHTML = `
      <input type="checkbox"
          id="${skill}"
          value="${skill}"
          onchange="updateSkill('${skill}')">
      <div style='display: inline'>${skill}</div>
      <svg style='display: inline' height="24px" id="Layer_1" version="1.2" viewBox="0 0 24 24" width="24px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M9.362,9.158c0,0-3.16,0.35-5.268,0.584c-0.19,0.023-0.358,0.15-0.421,0.343s0,0.394,0.14,0.521    c1.566,1.429,3.919,3.569,3.919,3.569c-0.002,0-0.646,3.113-1.074,5.19c-0.036,0.188,0.032,0.387,0.196,0.506    c0.163,0.119,0.373,0.121,0.538,0.028c1.844-1.048,4.606-2.624,4.606-2.624s2.763,1.576,4.604,2.625    c0.168,0.092,0.378,0.09,0.541-0.029c0.164-0.119,0.232-0.318,0.195-0.505c-0.428-2.078-1.071-5.191-1.071-5.191    s2.353-2.14,3.919-3.566c0.14-0.131,0.202-0.332,0.14-0.524s-0.23-0.319-0.42-0.341c-2.108-0.236-5.269-0.586-5.269-0.586    s-1.31-2.898-2.183-4.83c-0.082-0.173-0.254-0.294-0.456-0.294s-0.375,0.122-0.453,0.294C10.671,6.26,9.362,9.158,9.362,9.158z"></path></g></g></svg>`;
  skillColumn.appendChild(container);
});

let flagDone = {
  job_title: 0,
  seniority_level: 0,
  status: 0,
  industry: 0,
  // ownership doesnt need to fill if information is not available
  continent: 0,
  country: 0,
};

const features_zone1 = ["job_title", "seniority_level", "status", "industry"];
const zone2 = document.querySelector(".zone2");
const zone3 = document.querySelector(".zone3");

const predictBtn = document.getElementById("predictButton");

const titleInput = document.getElementById("job_title");
const seniorityInput = document.getElementById("seniority_level");
const statusInput = document.getElementById("status");
const industryInput = document.getElementById("industry");
const continentInput = document.getElementById("continent");
const countryInput = document.getElementById("country");
const ownershipInput = document.getElementById("ownership");

const continentCountries = {
  Asia: ["CN", "IN", "JP", "SG", "TW"],
  Europe: [
    "AT",
    "CH",
    "DE",
    "DK",
    "EE",
    "ES",
    "FR",
    "GB",
    "IE",
    "IT",
    "NL",
    "SE",
  ],
  "North America": ["US", "CA"],
  Others: ["AU", "BR"], // Oceania and South America
};
const countryNames = {
  AT: "Austria",
  AU: "Australia",
  BR: "Brazil",
  CA: "Canada",
  CH: "Switzerland",
  CN: "China",
  DE: "Germany",
  DK: "Denmark",
  EE: "Estonia",
  ES: "Spain",
  FR: "France",
  GB: "United Kingdom",
  IE: "Ireland",
  IN: "India",
  IT: "Italy",
  JP: "Japan",
  NL: "Netherlands",
  SE: "Sweden",
  SG: "Singapore",
  TW: "Taiwan",
  US: "United States",
};

function updateUserFeatures(userFeatureID) {
  let element = document.getElementById(userFeatureID);
  let value = element.value;

  // For ownership, when it allows null value
  if (userFeatureID === "ownership" && value === "") {
    // Only need to reset ownership
    for (let otherFeatureSameID in userFeatures) {
      if (otherFeatureSameID.startsWith(userFeatureID)) {
        userFeatures[otherFeatureSameID] = 0;
      }
    }
    return;
  }

  if (userFeatureID === "seniority_level") {
    userFeatures[userFeatureID] = Number(value);
  } else {
    // job_title, status, industry, ownership, continent, country
    for (let otherFeatureSameID in userFeatures) {
      // Reset all other dummies to 0
      if (otherFeatureSameID.startsWith(userFeatureID)) {
        userFeatures[otherFeatureSameID] = 0;
      }
    }
    // Only set 1 to the chosen value
    userFeatures[userFeatureID + "_" + value] = 1;
  }

  flagDone[userFeatureID] = 1;
  if (!features_zone1.some((feature) => flagDone[feature] === 0)) {
    zone2.classList.remove("hidden");
  }

  showPredictButton();
}

function updateSkill(skillID) {
  let skillCheckBox = document.getElementById(skillID);
  userFeatures[skillID] = skillCheckBox.checked ? 1 : 0;
}

function showPredictButton() {
  if (!Object.values(flagDone).includes(0)) {
    predictBtn.classList.remove("hidden");
  } else {
    predictBtn.classList.add("hidden");
  }
}

function showZone3() {
  if (flagDone["continent"] === 0) {
    zone3.classList.add("hidden");
    return;
  }

  zone3.classList.remove("hidden");

  const selectedContinent = continentInput.value;
  const relevantCountries = continentCountries[selectedContinent]; // e.g US, BR, IN, etc

  countryInput.innerHTML = "";

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.hidden = true;
  defaultOption.selected = true;
  countryInput.appendChild(defaultOption);

  relevantCountries.forEach((countryCode) => {
    const option = document.createElement("option");
    option.value = countryCode;
    option.textContent = countryNames[countryCode];
    countryInput.appendChild(option);
  });

  // In case choose continent again
  flagDone["country"] = 0;
  showPredictButton();
}

async function predictSalary() {
  // Load models
  const startSession = await ort.InferenceSession.create(
    "models/salary_start_model.onnx",
  );
  const endSession = await ort.InferenceSession.create(
    "models/salary_end_model.onnx",
  );

  // Convert userFeatures to array in correct order
  const featuresArray = Object.values(userFeatures);
  const tensor = new ort.Tensor(
    "float32",
    Float32Array.from(featuresArray),
    [1, 74],
  );

  // Use the correct input name from ONNX
  const startOutput = await startSession.run({ input: tensor });
  const endOutput = await endSession.run({ input: tensor });

  // Convert from log into money form
  const salaryStart = Math.expm1(
    Math.min(startOutput["variable"].data[0], endOutput["variable"].data[0]),
  );
  const salaryEnd = Math.expm1(
    Math.max(startOutput["variable"].data[0], endOutput["variable"].data[0]),
  );

  const resultZone = document.getElementById("result");
  resultZone.innerHTML = `Predicted salary range:
  <div class='predicted-range'>
    ${salaryStart.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} 
    - 
    ${salaryEnd.toLocaleString("vi-VN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} AUD
  </div>`;
}
