import pandas as pd

def get_results(name):

    all_results = pd.read_csv("data/patient_tb.csv")
    name_matches = all_results[all_results["PatientFirstName"] == name]

    # filtered to remove duplicate rows where one patient takes 
    # the same test multiple times on one day and recieves the same result
    filtered_results = name_matches.drop_duplicates(subset=["PatientID", "MostRecentTestDate", "TestName", "MostRecentLabResult"])

    # Convert MostRecentTestDate string to datetime, then sort, then convert back to string
    filtered_results["MostRecentTestDate"] = pd.to_datetime(filtered_results["MostRecentTestDate"])
    sorted_results = filtered_results.sort_values(by=['PatientLastName', 'MostRecentTestDate'], ascending=[True, False])
    sorted_results["MostRecentTestDate"] = sorted_results["MostRecentTestDate"].dt.strftime('%m/%d/%Y')
    
    data = sorted_results.T.to_dict()
    return list(data.values())