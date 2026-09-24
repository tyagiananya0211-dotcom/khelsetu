# KhelSetu - Project Report

## Problem Statement
**SIH Problem Statement**: SIH26196  
**Organization**: AICTE  
**Theme**: Fitness & Sports  
**Category**: Software  

## Abstract
KhelSetu bridges the gap between educational institutions, students, and sports opportunities by centralizing sports tracking and discovery through a robust data-driven dashboard augmented by AI insights. 

## Problem Identification
Lack of transparent talent identification, uneven infrastructure utilization, and disjointed opportunity awareness limit the development of collegiate sports.

## Proposed Solution
A unified sports ecosystem portal that profiles students and institutions, quantifies sports development using transparent rule-based metrics, and intelligently suggests actionable improvements and matches.

## Objectives
- Track sports infrastructure and participation.
- Provide a fair "Sports Development Score".
- Autonomously detect "Development Gaps" in institutions.
- Match students with optimal sports opportunities without relying on black-box ML models.

## Stakeholders
1. **Students**: Track progress and discover tailored opportunities.
2. **Institutions**: Monitor infrastructure, coaching staff, and participation.
3. **Authorities**: Aggregate analytics and observe ecosystem trends.

## System Architecture
React (Vite) Frontend -> Axios -> PHP (PDO) Backend -> MySQL Database.

## Technology Stack
- React, Vite, TailwindCSS
- PHP, MySQL
- Rule-based AI integration

## Database Design
- Users, Roles, Student Profiles, Institutions
- Sports, Coaches, Infrastructure, Participation, Achievements
- Opportunities, Applications
- Development Scores, Gaps

## Sports Development Score
A deterministic calculation where normalized component points are summed:
- Infrastructure (25%)
- Participation (20%)
- Coaching (20%)
- Achievements (20%)
- Opportunities (15%)

## Opportunity Matching
Weighted matching mechanism identifying the best fit for students based on experience, preferred sports, location, and achievements.

## AI Architecture and Use Cases
Integration relies strictly on an **External Pretrained LLM API** (e.g., OpenAI) avoiding on-premise model training, TensorFlow, or PyTorch. It explains detected anomalies (Development Gaps), summarizes achievements, and formulates natural-language action plans based on deterministic backend data.

## Limitations
- Heavily reliant on manual data-entry integrity by institutions and students.
- Initial matching logic is highly dependent on well-structured rule weights.

## Privacy and Ethics
Authority aggregation automatically pseudo-anonymizes specific student metrics. User passwords and personal data adhere to standard web security practices (hashed storage).

## Future Scope
- Automated API-based integration with college identity platforms.
- Wearable fitness data integration.
- Expanded generative AI action plans utilizing long-context models.

## Conclusion
KhelSetu presents an equitable, robust, and scalable platform that empowers stakeholders through clear analytics and intelligent discovery paths, effectively fulfilling the AICTE mandate for an advanced sports management system.
