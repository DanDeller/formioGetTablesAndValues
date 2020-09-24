// Example data
const response = {
  "data": {
    "Cstm_PF_ADG_URT_Disposition": {
      "child_welfare_placement_value": ""
    },
    "Cstm_PF_ADG_URT_Demographics": {
      "school_grade": "family setting",
      "school_grade_code": ""
    },
    "Cstm_Precert_Medical_Current_Meds": [
      {
        "med_name": "med1",
        "dosage": "10mg",
        "frequency": "daily"
      },
      {
        "med_name": "med2",
        "dosage": "20mg",
        "frequency": "daily"
      }
    ],
    "Cstm_PF_ADG_URT_Substance_Use": {
      "dimension1_comment": "dimension 1 - tab1",
      "Textbox1": "text - tab1"
    },
    "Cstm_PF_ADG_Discharge_Note": {
      "prior_auth_no_comm": "auth no - tab2"
    },
    "Cstm_PF_ADG_URT_Clinical_Plan": {
      "cca_cs_dhs_details": "details - tab2"
    },
    "container": {
      "Cstm_PF_Name": {
        "first_name": "same text for textbox - footer",
        "last_name": "second textbox - footer"
      },
      "Cstm_PF_ADG_URT_Demographics": {
        "new_field": "mapped demo - footer"
      },
      "grid2": [
        {
          "Cstm_PF_ADG_COMP_Diagnosis": {
            "diagnosis_label": "knee",
            "diagnosis_group_code": "leg"
          }
        },
        {
          "Cstm_PF_ADG_COMP_Diagnosis": {
            "diagnosis_label": "ankle",
            "diagnosis_group_code": "leg"
          }
        }
      ]
    },
    "submit": true
  }
};

function getTablesAndValues(data, id, tablesAndValues = []) {
  const res = data;
 
  Object.entries(res).forEach(([key, value]) => {
    const newKey = key.split('_')[0].toLowerCase();
    
    if (newKey === id) {
      tablesAndValues.push({
        table: key,
        values: value
      });
    } else {
    	getTablesAndValues(value, id, tablesAndValues);    
    }
  });
  
  return tablesAndValues;
}

const getAll = getTablesAndValues(response.data, 'cstm');
