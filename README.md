# AltRx 💊
> *Don't Pay for the Brand. Pay for the Cure.*

![Project Status](https://img.shields.io/badge/Status-Prototype-orange)
![Tech Stack](https://img.shields.io/badge/Stack-React_|_Antigravity-blue)
![Data Source](https://img.shields.io/badge/Data-OpenFDA_API-green)

## 📖 Project Overview
*AltRx* is a HealthTech web application designed to democratize access to affordable healthcare. It serves as a specialized search engine that allows users to find cost-effective generic alternatives to expensive branded medications. By bridging the gap between complex pharmaceutical data and everyday consumers, AltRx empowers patients to make informed financial and health decisions.

---

## 🚩 Problem Statement
*The Economic Burden of Brand-Centric Medicine*
* *Financial Strain:* Patients often pay *40% to 80%* premiums for branded drugs purely due to marketing, despite generic versions having the exact same efficacy.
* *Information Asymmetry:* Most consumers lack the knowledge to identify that a branded drug (e.g., Advil) is biologically identical to a cheaper generic (e.g., Ibuprofen).
* *Data Gap:* There is no unified platform that combines *local pricing data* with *trusted clinical safety information* in a user-friendly interface.

## 💡 The Solution
AltRx provides a transparent "Search & Compare" interface:
1.  *Smart Matching:* Users search for a prescribed brand, and the system identifies the active "Salt" (API).
2.  *Cost Comparison:* Queries a custom database to find cheaper brands with the same salt composition.
3.  *Clinical Verification:* Fetches official drug descriptions and safety warnings directly from the *OpenFDA API*.

---

## 🛠️ Tech Stack

### Frontend
* *React.js:* Component-based architecture for a responsive Single Page Application (SPA).
* *JavaScript (ES6+):* Core logic and asynchronous data handling.
* *Antigravity:* Used for high-performance UI interactions and physics-based visual elements.

### Backend / Data
* *Custom Database:* A proprietary JSON/SQL dataset storing local Brand Names, Manufacturers, and Pricing.
* *OpenFDA API:* External API integration to fetch real-time clinical descriptions, side effects, and labeling information.

---

## 🚀 Key Features

### 1. Brand-to-Generic Search Engine
Instantly converts expensive brand names into their chemical equivalents and lists cheaper alternatives sorted by price.

### 2. Live Safety Data (OpenFDA)
Integrates real-time data from the FDA to display:
* *Bioequivalence:* Proof that the generic works the same way.
* *Warnings:* Contraindications and side effects.
* *Usage:* Standard dosage instructions.

### 3. Savings Calculator (SaveList)
A "Medicine Cabinet" feature where users can add their monthly prescriptions to see a dynamic calculation of their total potential savings.

### 4. Educational Hub
A dedicated section explaining *Bioequivalence* to build user trust in generic medicines, debunking myths about quality differences.

---

## 📂 Project Structure

```bash
AltRx/
├── public/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable UI components (Cards, SearchBar)
│   ├── data/            # Custom JSON database (medicines.json)
│   ├── pages/
│   │   ├── Landing.jsx  # Hero section with Antigravity visuals
│   │   ├── Search.jsx   # Results and comparison logic
│   │   ├── Details.jsx  # OpenFDA data display
│   │   ├── About.jsx    # Mission and Team
│   │   └── SaveList.jsx # Savings calculator
│   ├── services/        # API fetch logic (OpenFDA setup)
│   └── App.js
├── package.json
└── README.md