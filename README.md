# Salary Range of Data Related Jobs

## Overview
This project analyzes a global dataset of data-related job postings from [Kaggle](https://www.kaggle.com/datasets/elahehgolrokh/data-science-job-postings-with-salaries-2025/data) to uncover salary trends, in-demand skills, and role expectations across the data industry. It includes a predictive model that estimates a realistic, market-aligned salary based on user inputs such as target role, skills, location, and years of experience. This helps users gain a better understanding of market pricing, prepare for interviews, and negotiate effectively.

## Features
- **User Input-Based Prediction** – Enter your target role, years of experience, location, and select the skills you have.  
- **Salary Estimation** – Uses a pretrained model ([notebook link](https://github.com/nqphu412/Salary_Range_of_Data_Related_Jobs/blob/main/reference/SalaryPredictionModel.ipynb)) to estimate a realistic salary range for your profile.  
- **Market Awareness** – Gives a general idea of salary expectations for data-related jobs from various global job ads.  
- **Limitations** – Dataset is mostly US-based and contains imbalances in position titles. Predictions may be less accurate for non-US roles. This project provides a baseline and can be improved with more diverse data.


🔗 **Live Demo**: [Start predicting range](https://nqphu412.github.io/Salary_Range_of_Data_Related_Jobs/)

## Technologies & Tools
- **Python** with libraries:
  - `pandas` & `numpy` – data manipulation and analysis  
  - `matplotlib` – data visualization  
  - `scikit-learn` – preprocessing, model selection, and evaluation  
  - `xgboost` – main predictive model  
  - `requests` – for data fetching from APIs if needed  
  - `joblib` – for saving and loading models in the website  

## Author
**Quang Phu (Elio) Nguyen**  
📧 quangphu.work412@gmail.com  
🌐 [GitHub Profile](https://github.com/nqphu412)
