export const mockDrugDatabase = {
    // Analgesics & Anti-inflammatory
    "ibuprofen": [
        { brand: "Advil", genericName: "Ibuprofen", manufacturer: "Pfizer", price: "12.99" },
        { brand: "Motrin", genericName: "Ibuprofen", manufacturer: "Johnson & Johnson", price: "11.50" },
        { brand: "Nuprin", genericName: "Ibuprofen", manufacturer: "Bristol-Myers Squibb", price: "10.75" },
        { brand: "Generic Ibuprofen", genericName: "Ibuprofen", manufacturer: "Various", price: "5.99" },
        { brand: "Midol", genericName: "Ibuprofen", manufacturer: "Bayer", price: "9.99" }
    ],
    "acetaminophen": [
        { brand: "Tylenol", genericName: "Acetaminophen", manufacturer: "Johnson & Johnson", price: "10.99" },
        { brand: "Panadol", genericName: "Acetaminophen", manufacturer: "GlaxoSmithKline", price: "9.50" },
        { brand: "Excedrin", genericName: "Acetaminophen", manufacturer: "Novartis", price: "11.25" },
        { brand: "Generic Acetaminophen", genericName: "Acetaminophen", manufacturer: "Various", price: "4.50" },
        { brand: "Mapap", genericName: "Acetaminophen", manufacturer: "Major", price: "5.25" }
    ],
    "aspirin": [
        { brand: "Bayer Aspirin", genericName: "Aspirin", manufacturer: "Bayer", price: "8.99" },
        { brand: "Ecotrin", genericName: "Aspirin", manufacturer: "Prestige Consumer Healthcare", price: "9.50" },
        { brand: "Bufferin", genericName: "Aspirin", manufacturer: "Dr. Reddy's", price: "10.00" },
        { brand: "St. Joseph", genericName: "Aspirin", manufacturer: "Foundation Consumer", price: "7.99" },
        { brand: "Generic Aspirin", genericName: "Aspirin", manufacturer: "Various", price: "3.99" }
    ],
    "naproxen": [
        { brand: "Aleve", genericName: "Naproxen", manufacturer: "Bayer", price: "13.50" },
        { brand: "Naprosyn", genericName: "Naproxen", manufacturer: "Roche", price: "15.00" },
        { brand: "Anaprox", genericName: "Naproxen", manufacturer: "Roche", price: "16.50" },
        { brand: "Generic Naproxen", genericName: "Naproxen", manufacturer: "Various", price: "6.50" }
    ],
    "celecoxib": [
        { brand: "Celebrex", genericName: "Celecoxib", manufacturer: "Pfizer", price: "45.00" },
        { brand: "Generic Celecoxib", genericName: "Celecoxib", manufacturer: "Various", price: "15.00" },
        { brand: "Consensi", genericName: "Celecoxib", manufacturer: "Kitov", price: "50.00" }
    ],
    "diclofenac": [
        { brand: "Voltaren", genericName: "Diclofenac", manufacturer: "GlaxoSmithKline", price: "18.99" },
        { brand: "Cataflam", genericName: "Diclofenac", manufacturer: "Novartis", price: "22.50" },
        { brand: "Zipsor", genericName: "Diclofenac", manufacturer: "Assertio", price: "35.00" },
        { brand: "Generic Diclofenac", genericName: "Diclofenac", manufacturer: "Various", price: "8.50" }
    ],
    "meloxicam": [
        { brand: "Mobic", genericName: "Meloxicam", manufacturer: "Boehringer Ingelheim", price: "28.00" },
        { brand: "Vivlodex", genericName: "Meloxicam", manufacturer: "Iroko", price: "40.00" },
        { brand: "Generic Meloxicam", genericName: "Meloxicam", manufacturer: "Various", price: "7.00" }
    ],

    // Antibiotics
    "amoxicillin": [
        { brand: "Amoxil", genericName: "Amoxicillin", manufacturer: "GlaxoSmithKline", price: "18.00" },
        { brand: "Moxatag", genericName: "Amoxicillin", manufacturer: "Prasco", price: "22.50" },
        { brand: "Trimox", genericName: "Amoxicillin", manufacturer: "Apothecon", price: "15.00" },
        { brand: "Generic Amoxicillin", genericName: "Amoxicillin", manufacturer: "Various", price: "6.50" }
    ],
    "azithromycin": [
        { brand: "Zithromax", genericName: "Azithromycin", manufacturer: "Pfizer", price: "35.00" },
        { brand: "Z-Pak", genericName: "Azithromycin", manufacturer: "Pfizer", price: "38.00" },
        { brand: "Generic Azithromycin", genericName: "Azithromycin", manufacturer: "Various", price: "12.00" }
    ],
    "cephalexin": [
        { brand: "Keflex", genericName: "Cephalexin", manufacturer: "Shionogi", price: "25.00" },
        { brand: "Daxbia", genericName: "Cephalexin", manufacturer: "Daxor", price: "30.00" },
        { brand: "Generic Cephalexin", genericName: "Cephalexin", manufacturer: "Various", price: "9.00" }
    ],
    "ciprofloxacin": [
        { brand: "Cipro", genericName: "Ciprofloxacin", manufacturer: "Bayer", price: "28.00" },
        { brand: "Cipro XR", genericName: "Ciprofloxacin", manufacturer: "Bayer", price: "32.00" },
        { brand: "Generic Ciprofloxacin", genericName: "Ciprofloxacin", manufacturer: "Various", price: "10.00" }
    ],
    "doxycycline": [
        { brand: "Vibramycin", genericName: "Doxycycline", manufacturer: "Pfizer", price: "40.00" },
        { brand: "Doryx", genericName: "Doxycycline", manufacturer: "Mayne Pharma", price: "55.00" },
        { brand: "Oracea", genericName: "Doxycycline", manufacturer: "Galderma", price: "60.00" },
        { brand: "Generic Doxycycline", genericName: "Doxycycline", manufacturer: "Various", price: "14.00" }
    ],
    "levofloxacin": [
        { brand: "Levaquin", genericName: "Levofloxacin", manufacturer: "Janssen", price: "35.00" },
        { brand: "Generic Levofloxacin", genericName: "Levofloxacin", manufacturer: "Various", price: "11.00" }
    ],
    "metronidazole": [
        { brand: "Flagyl", genericName: "Metronidazole", manufacturer: "Pfizer", price: "22.00" },
        { brand: "MetroCream", genericName: "Metronidazole", manufacturer: "Galderma", price: "45.00" },
        { brand: "Generic Metronidazole", genericName: "Metronidazole", manufacturer: "Various", price: "8.00" }
    ],
    "clindamycin": [
        { brand: "Cleocin", genericName: "Clindamycin", manufacturer: "Pfizer", price: "30.00" },
        { brand: "Clindagel", genericName: "Clindamycin", manufacturer: "Bausch Health", price: "50.00" },
        { brand: "Generic Clindamycin", genericName: "Clindamycin", manufacturer: "Various", price: "12.00" }
    ],
    "augmentin": [
        { brand: "Augmentin", genericName: "Amoxicillin/Clavulanate", manufacturer: "GlaxoSmithKline", price: "45.00" },
        { brand: "Augmentin ES-600", genericName: "Amoxicillin/Clavulanate", manufacturer: "GlaxoSmithKline", price: "55.00" },
        { brand: "Generic Amoxicillin/Clavulanate", genericName: "Amoxicillin/Clavulanate", manufacturer: "Various", price: "18.00" }
    ],

    // Cardiovascular (Blood Pressure, Cholesterol)
    "lisinopril": [
        { brand: "Prinivil", genericName: "Lisinopril", manufacturer: "Merck", price: "25.00" },
        { brand: "Zestril", genericName: "Lisinopril", manufacturer: "AstraZeneca", price: "28.50" },
        { brand: "Qbrelis", genericName: "Lisinopril", manufacturer: "Silvergate", price: "40.00" },
        { brand: "Generic Lisinopril", genericName: "Lisinopril", manufacturer: "Various", price: "8.00" }
    ],
    "amlodipine": [
        { brand: "Norvasc", genericName: "Amlodipine", manufacturer: "Pfizer", price: "26.00" },
        { brand: "Katerzia", genericName: "Amlodipine", manufacturer: "Azurity", price: "35.00" },
        { brand: "Generic Amlodipine", genericName: "Amlodipine", manufacturer: "Various", price: "7.50" }
    ],
    "metoprolol": [
        { brand: "Lopressor", genericName: "Metoprolol", manufacturer: "Novartis", price: "20.00" },
        { brand: "Toprol-XL", genericName: "Metoprolol", manufacturer: "Aralez", price: "28.00" },
        { brand: "Generic Metoprolol", genericName: "Metoprolol", manufacturer: "Various", price: "9.00" }
    ],
    "losartan": [
        { brand: "Cozaar", genericName: "Losartan", manufacturer: "Merck", price: "24.00" },
        { brand: "Generic Losartan", genericName: "Losartan", manufacturer: "Various", price: "10.00" }
    ],
    "atorvastatin": [
        { brand: "Lipitor", genericName: "Atorvastatin", manufacturer: "Pfizer", price: "45.00" },
        { brand: "Generic Atorvastatin", genericName: "Atorvastatin", manufacturer: "Various", price: "12.00" }
    ],
    "simvastatin": [
        { brand: "Zocor", genericName: "Simvastatin", manufacturer: "Merck", price: "30.00" },
        { brand: "FloLipid", genericName: "Simvastatin", manufacturer: "Kowa", price: "40.00" },
        { brand: "Generic Simvastatin", genericName: "Simvastatin", manufacturer: "Various", price: "8.00" }
    ],
    "rosuvastatin": [
        { brand: "Crestor", genericName: "Rosuvastatin", manufacturer: "AstraZeneca", price: "50.00" },
        { brand: "Ezallor", genericName: "Rosuvastatin", manufacturer: "Sun Pharma", price: "55.00" },
        { brand: "Generic Rosuvastatin", genericName: "Rosuvastatin", manufacturer: "Various", price: "15.00" }
    ],
    "hydrochlorothiazide": [
        { brand: "Microzide", genericName: "Hydrochlorothiazide", manufacturer: "Allergan", price: "18.00" },
        { brand: "Oretic", genericName: "Hydrochlorothiazide", manufacturer: "Abbott", price: "15.00" },
        { brand: "Generic HCTZ", genericName: "Hydrochlorothiazide", manufacturer: "Various", price: "5.00" }
    ],
    "furosemide": [
        { brand: "Lasix", genericName: "Furosemide", manufacturer: "Sanofi", price: "16.00" },
        { brand: "Generic Furosemide", genericName: "Furosemide", manufacturer: "Various", price: "6.00" }
    ],
    "carvedilol": [
        { brand: "Coreg", genericName: "Carvedilol", manufacturer: "GlaxoSmithKline", price: "35.00" },
        { brand: "Coreg CR", genericName: "Carvedilol", manufacturer: "GlaxoSmithKline", price: "45.00" },
        { brand: "Generic Carvedilol", genericName: "Carvedilol", manufacturer: "Various", price: "11.00" }
    ],
    "atenolol": [
        { brand: "Tenormin", genericName: "Atenolol", manufacturer: "AstraZeneca", price: "22.00" },
        { brand: "Generic Atenolol", genericName: "Atenolol", manufacturer: "Various", price: "7.00" }
    ],
    "clonidine": [
        { brand: "Catapres", genericName: "Clonidine", manufacturer: "Boehringer Ingelheim", price: "25.00" },
        { brand: "Kapvay", genericName: "Clonidine", manufacturer: "Concordia", price: "40.00" },
        { brand: "Generic Clonidine", genericName: "Clonidine", manufacturer: "Various", price: "9.00" }
    ],
    "spironolactone": [
        { brand: "Aldactone", genericName: "Spironolactone", manufacturer: "Pfizer", price: "20.00" },
        { brand: "CaroSpir", genericName: "Spironolactone", manufacturer: "CMP Pharma", price: "35.00" },
        { brand: "Generic Spironolactone", genericName: "Spironolactone", manufacturer: "Various", price: "8.50" }
    ],
    "clopidogrel": [
        { brand: "Plavix", genericName: "Clopidogrel", manufacturer: "Bristol-Myers Squibb", price: "40.00" },
        { brand: "Generic Clopidogrel", genericName: "Clopidogrel", manufacturer: "Various", price: "12.00" }
    ],
    "warfarin": [
        { brand: "Coumadin", genericName: "Warfarin", manufacturer: "Bristol-Myers Squibb", price: "30.00" },
        { brand: "Jantoven", genericName: "Warfarin", manufacturer: "Upsher-Smith", price: "25.00" },
        { brand: "Generic Warfarin", genericName: "Warfarin", manufacturer: "Various", price: "10.00" }
    ],
    "apixaban": [
        { brand: "Eliquis", genericName: "Apixaban", manufacturer: "Bristol-Myers Squibb", price: "450.00" },
        { brand: "Generic Apixaban", genericName: "Apixaban", manufacturer: "Various", price: "150.00" }
    ],
    "rivaroxaban": [
        { brand: "Xarelto", genericName: "Rivaroxaban", manufacturer: "Janssen", price: "460.00" },
        { brand: "Generic Rivaroxaban", genericName: "Rivaroxaban", manufacturer: "Various", price: "160.00" }
    ],

    // Diabetes
    "metformin": [
        { brand: "Glucophage", genericName: "Metformin", manufacturer: "Merck", price: "15.00" },
        { brand: "Glumetza", genericName: "Metformin", manufacturer: "Salix", price: "45.00" },
        { brand: "Fortamet", genericName: "Metformin", manufacturer: "Shionogi", price: "50.00" },
        { brand: "Riomet", genericName: "Metformin", manufacturer: "Sun Pharma", price: "30.00" },
        { brand: "Generic Metformin", genericName: "Metformin", manufacturer: "Various", price: "4.00" }
    ],
    "glipizide": [
        { brand: "Glucotrol", genericName: "Glipizide", manufacturer: "Pfizer", price: "20.00" },
        { brand: "Glucotrol XL", genericName: "Glipizide", manufacturer: "Pfizer", price: "28.00" },
        { brand: "Generic Glipizide", genericName: "Glipizide", manufacturer: "Various", price: "7.00" }
    ],
    "sitagliptin": [
        { brand: "Januvia", genericName: "Sitagliptin", manufacturer: "Merck", price: "400.00" },
        { brand: "Generic Sitagliptin", genericName: "Sitagliptin", manufacturer: "Various", price: "120.00" }
    ],
    "insulin glargine": [
        { brand: "Lantus", genericName: "Insulin Glargine", manufacturer: "Sanofi", price: "300.00" },
        { brand: "Toujeo", genericName: "Insulin Glargine", manufacturer: "Sanofi", price: "350.00" },
        { brand: "Basaglar", genericName: "Insulin Glargine", manufacturer: "Lilly", price: "250.00" },
        { brand: "Semglee", genericName: "Insulin Glargine", manufacturer: "Viatris", price: "200.00" }
    ],

    // Gastrointestinal
    "omeprazole": [
        { brand: "Prilosec", genericName: "Omeprazole", manufacturer: "Procter & Gamble", price: "22.00" },
        { brand: "Prilosec OTC", genericName: "Omeprazole", manufacturer: "Procter & Gamble", price: "18.00" },
        { brand: "Generic Omeprazole", genericName: "Omeprazole", manufacturer: "Various", price: "10.00" }
    ],
    "pantoprazole": [
        { brand: "Protonix", genericName: "Pantoprazole", manufacturer: "Pfizer", price: "35.00" },
        { brand: "Generic Pantoprazole", genericName: "Pantoprazole", manufacturer: "Various", price: "12.00" }
    ],
    "esomeprazole": [
        { brand: "Nexium", genericName: "Esomeprazole", manufacturer: "AstraZeneca", price: "40.00" },
        { brand: "Nexium 24HR", genericName: "Esomeprazole", manufacturer: "Pfizer", price: "25.00" },
        { brand: "Generic Esomeprazole", genericName: "Esomeprazole", manufacturer: "Various", price: "15.00" }
    ],
    "famotidine": [
        { brand: "Pepcid", genericName: "Famotidine", manufacturer: "Johnson & Johnson", price: "16.00" },
        { brand: "Pepcid AC", genericName: "Famotidine", manufacturer: "Johnson & Johnson", price: "14.00" },
        { brand: "Generic Famotidine", genericName: "Famotidine", manufacturer: "Various", price: "6.00" }
    ],
    "ranitidine": [
        { brand: "Zantac", genericName: "Ranitidine", manufacturer: "Sanofi", price: "18.00" },
        { brand: "Generic Ranitidine", genericName: "Ranitidine", manufacturer: "Various", price: "7.00" }
    ],
    "docusate": [
        { brand: "Colace", genericName: "Docusate", manufacturer: "Avrio Health", price: "15.00" },
        { brand: "Dulcolax Stool Softener", genericName: "Docusate", manufacturer: "Sanofi", price: "12.00" },
        { brand: "Generic Docusate", genericName: "Docusate", manufacturer: "Various", price: "5.00" }
    ],

    // Psych/Neuro
    "sertraline": [
        { brand: "Zoloft", genericName: "Sertraline", manufacturer: "Pfizer", price: "35.00" },
        { brand: "Generic Sertraline", genericName: "Sertraline", manufacturer: "Various", price: "9.00" }
    ],
    "fluoxetine": [
        { brand: "Prozac", genericName: "Fluoxetine", manufacturer: "Lilly", price: "30.00" },
        { brand: "Sarafem", genericName: "Fluoxetine", manufacturer: "Allergan", price: "40.00" },
        { brand: "Generic Fluoxetine", genericName: "Fluoxetine", manufacturer: "Various", price: "8.00" }
    ],
    "citalopram": [
        { brand: "Celexa", genericName: "Citalopram", manufacturer: "Allergan", price: "32.00" },
        { brand: "Generic Citalopram", genericName: "Citalopram", manufacturer: "Various", price: "8.50" }
    ],
    "escitalopram": [
        { brand: "Lexapro", genericName: "Escitalopram", manufacturer: "Allergan", price: "38.00" },
        { brand: "Generic Escitalopram", genericName: "Escitalopram", manufacturer: "Various", price: "10.00" }
    ],
    "alprazolam": [
        { brand: "Xanax", genericName: "Alprazolam", manufacturer: "Pfizer", price: "40.00" },
        { brand: "Xanax XR", genericName: "Alprazolam", manufacturer: "Pfizer", price: "45.00" },
        { brand: "Generic Alprazolam", genericName: "Alprazolam", manufacturer: "Various", price: "12.00" }
    ],
    "lorazepam": [
        { brand: "Ativan", genericName: "Lorazepam", manufacturer: "Pfizer", price: "35.00" },
        { brand: "Generic Lorazepam", genericName: "Lorazepam", manufacturer: "Various", price: "10.00" }
    ],
    "gabapentin": [
        { brand: "Neurontin", genericName: "Gabapentin", manufacturer: "Pfizer", price: "28.00" },
        { brand: "Gralise", genericName: "Gabapentin", manufacturer: "Almatica", price: "50.00" },
        { brand: "Horizant", genericName: "Gabapentin", manufacturer: "Arbor", price: "60.00" },
        { brand: "Generic Gabapentin", genericName: "Gabapentin", manufacturer: "Various", price: "9.00" }
    ],
    "pregabalin": [
        { brand: "Lyrica", genericName: "Pregabalin", manufacturer: "Pfizer", price: "150.00" },
        { brand: "Lyrica CR", genericName: "Pregabalin", manufacturer: "Pfizer", price: "180.00" },
        { brand: "Generic Pregabalin", genericName: "Pregabalin", manufacturer: "Various", price: "40.00" }
    ],
    "zolpidem": [
        { brand: "Ambien", genericName: "Zolpidem", manufacturer: "Sanofi", price: "40.00" },
        { brand: "Ambien CR", genericName: "Zolpidem", manufacturer: "Sanofi", price: "50.00" },
        { brand: "Edluar", genericName: "Zolpidem", manufacturer: "Meda", price: "45.00" },
        { brand: "Generic Zolpidem", genericName: "Zolpidem", manufacturer: "Various", price: "12.00" }
    ],
    "duloxetine": [
        { brand: "Cymbalta", genericName: "Duloxetine", manufacturer: "Lilly", price: "180.00" },
        { brand: "Generic Duloxetine", genericName: "Duloxetine", manufacturer: "Various", price: "30.00" }
    ],
    "venlafaxine": [
        { brand: "Effexor XR", genericName: "Venlafaxine", manufacturer: "Pfizer", price: "120.00" },
        { brand: "Generic Venlafaxine", genericName: "Venlafaxine", manufacturer: "Various", price: "25.00" }
    ],
    "bupropion": [
        { brand: "Wellbutrin XL", genericName: "Bupropion", manufacturer: "Bausch Health", price: "140.00" },
        { brand: "Wellbutrin SR", genericName: "Bupropion", manufacturer: "GlaxoSmithKline", price: "110.00" },
        { brand: "Zyban", genericName: "Bupropion", manufacturer: "GlaxoSmithKline", price: "130.00" },
        { brand: "Generic Bupropion", genericName: "Bupropion", manufacturer: "Various", price: "28.00" }
    ],
    "trazodone": [
        { brand: "Desyrel", genericName: "Trazodone", manufacturer: "Prasco", price: "40.00" },
        { brand: "Oleptro", genericName: "Trazodone", manufacturer: "Angelini", price: "60.00" },
        { brand: "Generic Trazodone", genericName: "Trazodone", manufacturer: "Various", price: "10.00" }
    ],

    // Respiratory & Allergy
    "albuterol": [
        { brand: "ProAir HFA", genericName: "Albuterol", manufacturer: "Teva", price: "50.00" },
        { brand: "Ventolin HFA", genericName: "Albuterol", manufacturer: "GlaxoSmithKline", price: "55.00" },
        { brand: "Proventil HFA", genericName: "Albuterol", manufacturer: "Merck", price: "48.00" },
        { brand: "Generic Albuterol", genericName: "Albuterol", manufacturer: "Various", price: "25.00" }
    ],
    "fluticasone": [
        { brand: "Flonase", genericName: "Fluticasone", manufacturer: "GlaxoSmithKline", price: "22.00" },
        { brand: "Flovent HFA", genericName: "Fluticasone", manufacturer: "GlaxoSmithKline", price: "150.00" },
        { brand: "Generic Fluticasone", genericName: "Fluticasone", manufacturer: "Various", price: "15.00" }
    ],
    "montelukast": [
        { brand: "Singulair", genericName: "Montelukast", manufacturer: "Merck", price: "80.00" },
        { brand: "Generic Montelukast", genericName: "Montelukast", manufacturer: "Various", price: "15.00" }
    ],
    "cetirizine": [
        { brand: "Zyrtec", genericName: "Cetirizine", manufacturer: "Johnson & Johnson", price: "20.00" },
        { brand: "Generic Cetirizine", genericName: "Cetirizine", manufacturer: "Various", price: "8.00" }
    ],
    "loratadine": [
        { brand: "Claritin", genericName: "Loratadine", manufacturer: "Bayer", price: "22.00" },
        { brand: "Alavert", genericName: "Loratadine", manufacturer: "Pfizer", price: "18.00" },
        { brand: "Generic Loratadine", genericName: "Loratadine", manufacturer: "Various", price: "7.00" }
    ],
    "fexofenadine": [
        { brand: "Allegra", genericName: "Fexofenadine", manufacturer: "Sanofi", price: "24.00" },
        { brand: "Generic Fexofenadine", genericName: "Fexofenadine", manufacturer: "Various", price: "10.00" }
    ],
    "diphenhydramine": [
        { brand: "Benadryl", genericName: "Diphenhydramine", manufacturer: "Johnson & Johnson", price: "9.00" },
        { brand: "ZzzQuil", genericName: "Diphenhydramine", manufacturer: "Procter & Gamble", price: "11.00" },
        { brand: "Generic Diphenhydramine", genericName: "Diphenhydramine", manufacturer: "Various", price: "4.00" }
    ],

    // Endocrine / Hormonal
    "levothyroxine": [
        { brand: "Synthroid", genericName: "Levothyroxine", manufacturer: "AbbVie", price: "35.00" },
        { brand: "Levoxyl", genericName: "Levothyroxine", manufacturer: "Pfizer", price: "28.00" },
        { brand: "Tirosint", genericName: "Levothyroxine", manufacturer: "IBSA", price: "45.00" },
        { brand: "Unithroid", genericName: "Levothyroxine", manufacturer: "Amneal", price: "25.00" },
        { brand: "Generic Levothyroxine", genericName: "Levothyroxine", manufacturer: "Various", price: "12.00" }
    ],
    "prednisone": [
        { brand: "Deltasone", genericName: "Prednisone", manufacturer: "Pfizer", price: "15.00" },
        { brand: "Rayos", genericName: "Prednisone", manufacturer: "Horizon", price: "50.00" },
        { brand: "Generic Prednisone", genericName: "Prednisone", manufacturer: "Various", price: "5.00" }
    ],
    "tamsulosin": [
        { brand: "Flomax", genericName: "Tamsulosin", manufacturer: "Sanofi", price: "60.00" },
        { brand: "Generic Tamsulosin", genericName: "Tamsulosin", manufacturer: "Various", price: "15.00" }
    ],
    "sildenafil": [
        { brand: "Viagra", genericName: "Sildenafil", manufacturer: "Pfizer", price: "70.00" },
        { brand: "Revatio", genericName: "Sildenafil", manufacturer: "Pfizer", price: "80.00" },
        { brand: "Generic Sildenafil", genericName: "Sildenafil", manufacturer: "Various", price: "15.00" }
    ],
    "tadalafil": [
        { brand: "Cialis", genericName: "Tadalafil", manufacturer: "Lilly", price: "75.00" },
        { brand: "Adcirca", genericName: "Tadalafil", manufacturer: "United Therapeutics", price: "90.00" },
        { brand: "Generic Tadalafil", genericName: "Tadalafil", manufacturer: "Various", price: "18.00" }
    ],
    "finasteride": [
        { brand: "Propecia", genericName: "Finasteride", manufacturer: "Merck", price: "70.00" },
        { brand: "Proscar", genericName: "Finasteride", manufacturer: "Merck", price: "65.00" },
        { brand: "Generic Finasteride", genericName: "Finasteride", manufacturer: "Various", price: "20.00" }
    ],
    "alendronate": [
        { brand: "Fosamax", genericName: "Alendronate", manufacturer: "Merck", price: "50.00" },
        { brand: "Binosto", genericName: "Alendronate", manufacturer: "EffRx", price: "60.00" },
        { brand: "Generic Alendronate", genericName: "Alendronate", manufacturer: "Various", price: "15.00" }
    ],

    // Vitamins & Supplements
    "vitamin d": [
        { brand: "Drisdol", genericName: "Vitamin D", manufacturer: "Sanofi", price: "25.00" },
        { brand: "Nature Made Vitamin D", genericName: "Vitamin D", manufacturer: "Pharmavite", price: "12.00" },
        { brand: "Generic Vitamin D", genericName: "Vitamin D", manufacturer: "Various", price: "6.00" }
    ],
    "folic acid": [
        { brand: "Nature Made Folic Acid", genericName: "Folic Acid", manufacturer: "Pharmavite", price: "10.00" },
        { brand: "Generic Folic Acid", genericName: "Folic Acid", manufacturer: "Various", price: "4.00" }
    ],

    // Others
    "allopurinol": [
        { brand: "Zyloprim", genericName: "Allopurinol", manufacturer: "Casper Pharma", price: "20.00" },
        { brand: "Aloprim", genericName: "Allopurinol", manufacturer: "Mylan", price: "30.00" },
        { brand: "Generic Allopurinol", genericName: "Allopurinol", manufacturer: "Various", price: "8.00" }
    ],
    "ondansetron": [
        { brand: "Zofran", genericName: "Ondansetron", manufacturer: "Novartis", price: "45.00" },
        { brand: "Zuplenz", genericName: "Ondansetron", manufacturer: "Midatech", price: "55.00" },
        { brand: "Generic Ondansetron", genericName: "Ondansetron", manufacturer: "Various", price: "12.00" }
    ],
    "promethazine": [
        { brand: "Phenergan", genericName: "Promethazine", manufacturer: "Wyeth", price: "25.00" },
        { brand: "Generic Promethazine", genericName: "Promethazine", manufacturer: "Various", price: "8.00" }
    ],
    "cyclobenzaprine": [
        { brand: "Flexeril", genericName: "Cyclobenzaprine", manufacturer: "McNeil", price: "30.00" },
        { brand: "Amrix", genericName: "Cyclobenzaprine", manufacturer: "Teva", price: "50.00" },
        { brand: "Generic Cyclobenzaprine", genericName: "Cyclobenzaprine", manufacturer: "Various", price: "10.00" }
    ],
    "latanoprost": [
        { brand: "Xalatan", genericName: "Latanoprost", manufacturer: "Pfizer", price: "60.00" },
        { brand: "Generic Latanoprost", genericName: "Latanoprost", manufacturer: "Various", price: "15.00" }
    ],
    "mupirocin": [
        { brand: "Bactroban", genericName: "Mupirocin", manufacturer: "GlaxoSmithKline", price: "35.00" },
        { brand: "Centany", genericName: "Mupirocin", manufacturer: "Ortho", price: "45.00" },
        { brand: "Generic Mupirocin", genericName: "Mupirocin", manufacturer: "Various", price: "12.00" }
    ],
    "triamcinolone": [
        { brand: "Kenalog", genericName: "Triamcinolone", manufacturer: "Bristol-Myers Squibb", price: "25.00" },
        { brand: "Aristocort", genericName: "Triamcinolone", manufacturer: "Astellas", price: "30.00" },
        { brand: "Generic Triamcinolone", genericName: "Triamcinolone", manufacturer: "Various", price: "8.00" }
    ]
};
