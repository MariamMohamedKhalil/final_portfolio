# 🔐 Basic Security Risk Assessment for Small Company

## 📌 Project Overview

**Client:** TechStart Solutions (Mock Client)  
**Company Size:** 20 Employees  
**Industry:** Software Development  
**Assessment Date:** February 25, 2026  
**Analyst:** Mariam Khalil - Cybersecurity Analyst

---

## 🎯 Project Scope

### Objectives
- Identify critical business assets
- Analyze potential cybersecurity threats
- Detect existing vulnerabilities
- Calculate risk levels using industry standards
- Provide actionable security recommendations

### Methodology
- Asset inventory and classification
- Threat modeling (STRIDE framework)
- Vulnerability assessment
- Risk calculation (Risk = Likelihood × Impact)
- Compliance review (basic GDPR/ISO 27001)

---

## 📊 Executive Summary

TechStart Solutions, a 20-employee software development company, requested a basic security risk assessment to understand their cybersecurity posture. This assessment identified **15 critical assets**, **8 high-priority threats**, and **12 vulnerabilities** requiring immediate attention.

### Key Findings

**Overall Risk Score:** 6.8/10 (Medium-High Risk)

**Critical Issues:**
- ❌ No firewall on company network
- ❌ Weak password policy (no complexity requirements)
- ❌ No data backup strategy
- ❌ Unencrypted sensitive data
- ❌ No employee security training

**Risk Distribution:**
- 🔴 Critical Risk: 3 items (20%)
- 🟠 High Risk: 5 items (33%)
- 🟡 Medium Risk: 4 items (27%)
- 🟢 Low Risk: 3 items (20%)

**Estimated Financial Impact:** $50,000 - $150,000 (potential loss from single incident)

---

## 🏢 Company Profile

### Business Information
- **Name:** TechStart Solutions
- **Employees:** 20 (5 developers, 3 designers, 2 sales, 10 operations/admin)
- **Revenue:** $500,000/year
- **Industry:** Custom Software Development
- **Location:** Cairo, Egypt

### IT Infrastructure
- **Workstations:** 20 Windows 10/11 laptops
- **Servers:** 2 (1 web server, 1 database server)
- **Network:** Single office network with WiFi
- **Cloud Services:** Google Workspace, AWS (basic)
- **Software:** Development tools, CRM, accounting software

### Data Handled
- Customer information (names, emails, phone numbers)
- Project source code (proprietary)
- Financial records
- Employee personal data
- Business contracts and proposals

---

## 📦 Asset Inventory

### 1. Critical Assets

| Asset ID | Asset Name | Type | Value | Owner |
|----------|------------|------|-------|-------|
| A-001 | Customer Database | Data | Critical | IT Manager |
| A-002 | Source Code Repository | Data | Critical | CTO |
| A-003 | Financial Records | Data | Critical | CFO |
| A-004 | Web Application Server | Hardware | High | IT Manager |
| A-005 | Database Server | Hardware | High | IT Manager |
| A-006 | Employee Laptops | Hardware | Medium | IT Manager |
| A-007 | WiFi Network | Infrastructure | High | IT Manager |
| A-008 | Email System (Google) | Service | High | IT Manager |
| A-009 | Cloud Storage (AWS) | Service | High | IT Manager |
| A-010 | CRM System | Software | Medium | Sales Manager |
| A-011 | Accounting Software | Software | High | CFO |
| A-012 | Development Tools | Software | Medium | CTO |
| A-013 | Company Website | Service | Medium | Marketing |
| A-014 | Backup System | Infrastructure | Critical | IT Manager |
| A-015 | Physical Office | Physical | Medium | CEO |

### Asset Classification

**By Confidentiality:**
- Highly Confidential: 5 assets (33%)
- Confidential: 7 assets (47%)
- Internal Use: 3 assets (20%)

**By Criticality:**
- Critical: 4 assets (27%)
- High: 7 assets (47%)
- Medium: 4 assets (27%)

---

## ⚠️ Threat Analysis

### Threat Model (STRIDE Framework)

#### 1. External Threats

**T-001: Ransomware Attack**
- **Likelihood:** High (70%)
- **Impact:** Critical ($100,000+ loss)
- **Risk Score:** 9/10
- **Description:** Malware encrypts company data, demands ransom
- **Attack Vector:** Phishing email, malicious download
- **Affected Assets:** A-001, A-002, A-003, A-006

**T-002: Phishing Attack**
- **Likelihood:** Very High (85%)
- **Impact:** High ($20,000 - $50,000)
- **Risk Score:** 8/10
- **Description:** Employees tricked into revealing credentials
- **Attack Vector:** Fake emails, spoofed websites
- **Affected Assets:** A-008, A-001, A-009

**T-003: Data Breach**
- **Likelihood:** Medium (50%)
- **Impact:** Critical ($80,000+)
- **Risk Score:** 8/10
- **Description:** Unauthorized access to customer data
- **Attack Vector:** Weak passwords, SQL injection
- **Affected Assets:** A-001, A-004, A-005

**T-004: DDoS Attack**
- **Likelihood:** Low (20%)
- **Impact:** Medium ($5,000 - $15,000)
- **Risk Score:** 4/10
- **Description:** Website/services become unavailable
- **Attack Vector:** Botnet traffic flood
- **Affected Assets:** A-004, A-013

**T-005: Malware Infection**
- **Likelihood:** High (65%)
- **Impact:** High ($15,000 - $40,000)
- **Risk Score:** 7/10
- **Description:** Virus/trojan infects workstations
- **Attack Vector:** USB drives, downloads, email attachments
- **Affected Assets:** A-006, A-001, A-002

#### 2. Internal Threats

**T-006: Insider Threat (Malicious)**
- **Likelihood:** Low (15%)
- **Impact:** Critical ($50,000+)
- **Risk Score:** 6/10
- **Description:** Disgruntled employee steals/deletes data
- **Attack Vector:** Authorized access abuse
- **Affected Assets:** A-001, A-002, A-003

**T-007: Accidental Data Loss**
- **Likelihood:** Medium (40%)
- **Impact:** High ($10,000 - $30,000)
- **Risk Score:** 6/10
- **Description:** Employee accidentally deletes important files
- **Attack Vector:** Human error, no backup
- **Affected Assets:** A-001, A-002, A-003

**T-008: Social Engineering**
- **Likelihood:** High (60%)
- **Impact:** Medium ($5,000 - $20,000)
- **Risk Score:** 6/10
- **Description:** Attacker manipulates employee to gain access
- **Attack Vector:** Phone calls, impersonation
- **Affected Assets:** A-008, A-001, A-015

---

## 🔍 Vulnerability Assessment

### Critical Vulnerabilities

**V-001: No Network Firewall**
- **Severity:** Critical (CVSS 9.0)
- **Asset:** A-007 (WiFi Network)
- **Description:** Network has no firewall protection, allowing unrestricted access
- **Exploitation:** Easy - Direct network access
- **Impact:** Complete network compromise possible

**V-002: Weak Password Policy**
- **Severity:** Critical (CVSS 8.5)
- **Asset:** A-008, A-001, A-009
- **Description:** No password complexity requirements, no MFA
- **Exploitation:** Easy - Brute force, credential stuffing
- **Impact:** Account takeover, data breach

**V-003: No Data Backup**
- **Severity:** Critical (CVSS 9.5)
- **Asset:** A-014 (Backup System)
- **Description:** No regular backup of critical data
- **Exploitation:** N/A (Business continuity issue)
- **Impact:** Permanent data loss in case of ransomware/hardware failure

### High Vulnerabilities

**V-004: Unencrypted Data at Rest**
- **Severity:** High (CVSS 7.8)
- **Asset:** A-001, A-003
- **Description:** Sensitive data stored without encryption
- **Exploitation:** Medium - Physical access or malware
- **Impact:** Data exposure, compliance violation

**V-005: Outdated Software**
- **Severity:** High (CVSS 7.5)
- **Asset:** A-006 (Employee Laptops)
- **Description:** 40% of laptops running outdated OS/software
- **Exploitation:** Medium - Known vulnerabilities
- **Impact:** Malware infection, system compromise

**V-006: No Antivirus on All Devices**
- **Severity:** High (CVSS 7.2)
- **Asset:** A-006
- **Description:** 30% of laptops have no antivirus installed
- **Exploitation:** Easy - Malware execution
- **Impact:** Data theft, ransomware

**V-007: Weak WiFi Security**
- **Severity:** High (CVSS 7.0)
- **Asset:** A-007
- **Description:** WiFi using WPA2 with weak password
- **Exploitation:** Medium - Password cracking
- **Impact:** Network access, traffic interception

**V-008: No Security Training**
- **Severity:** High (CVSS 7.5)
- **Asset:** All employees
- **Description:** Employees never received security awareness training
- **Exploitation:** Easy - Social engineering, phishing
- **Impact:** Credential theft, malware infection

### Medium Vulnerabilities

**V-009: No Access Control Policy**
- **Severity:** Medium (CVSS 6.0)
- **Asset:** A-001, A-002
- **Description:** All employees have access to all data
- **Exploitation:** Medium - Insider threat
- **Impact:** Data leakage, unauthorized access

**V-010: No Incident Response Plan**
- **Severity:** Medium (CVSS 5.5)
- **Asset:** All systems
- **Description:** No documented procedure for security incidents
- **Exploitation:** N/A (Response capability issue)
- **Impact:** Delayed response, increased damage

**V-011: Physical Security Gaps**
- **Severity:** Medium (CVSS 5.8)
- **Asset:** A-015 (Office)
- **Description:** No visitor log, unlocked server room
- **Exploitation:** Easy - Physical access
- **Impact:** Hardware theft, data access

**V-012: No Log Monitoring**
- **Severity:** Medium (CVSS 6.2)
- **Asset:** A-004, A-005
- **Description:** Server logs not monitored or reviewed
- **Exploitation:** N/A (Detection capability issue)
- **Impact:** Undetected breaches, delayed response

---

## 📈 Risk Assessment Matrix

### Risk Calculation Formula
```
Risk Score = Likelihood × Impact × Vulnerability Severity
Scale: 1-10 (1=Low, 10=Critical)
```

### Comprehensive Risk Table

| Risk ID | Threat | Vulnerability | Asset | Likelihood | Impact | Risk Score | Priority |
|---------|--------|---------------|-------|------------|--------|------------|----------|
| R-001 | Ransomware | No Backup | A-001, A-002 | 7 | 10 | 9.5 | 🔴 Critical |
| R-002 | Data Breach | Weak Passwords | A-001 | 8 | 9 | 9.0 | 🔴 Critical |
| R-003 | Ransomware | No Firewall | A-007 | 7 | 9 | 8.5 | 🔴 Critical |
| R-004 | Phishing | No Training | All Users | 9 | 8 | 8.0 | 🟠 High |
| R-005 | Malware | No Antivirus | A-006 | 7 | 8 | 7.5 | 🟠 High |
| R-006 | Data Breach | Unencrypted Data | A-001, A-003 | 5 | 9 | 7.0 | 🟠 High |
| R-007 | Network Attack | Weak WiFi | A-007 | 6 | 7 | 6.5 | 🟠 High |
| R-008 | Malware | Outdated Software | A-006 | 6 | 7 | 6.5 | 🟠 High |
| R-009 | Insider Threat | No Access Control | A-001, A-002 | 4 | 8 | 6.0 | 🟡 Medium |
| R-010 | Data Loss | Accidental Deletion | A-001, A-002 | 5 | 7 | 6.0 | 🟡 Medium |
| R-011 | Physical Breach | Physical Security | A-015 | 3 | 7 | 5.0 | 🟡 Medium |
| R-012 | Undetected Breach | No Monitoring | A-004, A-005 | 4 | 6 | 5.0 | 🟡 Medium |
| R-013 | DDoS | No DDoS Protection | A-004, A-013 | 2 | 6 | 4.0 | 🟢 Low |
| R-014 | Social Engineering | No Training | All Users | 6 | 5 | 5.5 | 🟡 Medium |
| R-015 | Insider Threat | No Incident Plan | All Systems | 2 | 7 | 4.5 | 🟢 Low |

### Risk Distribution Chart
```
Critical (9-10):  3 risks (20%)  🔴🔴🔴
High (7-8.9):     5 risks (33%)  🟠🟠🟠🟠🟠
Medium (5-6.9):   5 risks (33%)  🟡🟡🟡🟡🟡
Low (1-4.9):      2 risks (13%)  🟢🟢
```

---

## 💡 Recommendations

### Immediate Actions (Week 1-2) - Critical Priority

**1. Implement Backup Solution**
- **Cost:** $500 - $1,000 (one-time) + $50/month
- **Timeline:** 1 week
- **Action Items:**
  - Purchase external backup drives or cloud backup service
  - Configure automated daily backups
  - Test backup restoration process
  - Document backup procedures
- **Expected Impact:** Eliminates R-001 (Risk reduced by 90%)

**2. Deploy Network Firewall**
- **Cost:** $1,000 - $2,500 (hardware) or $30/month (cloud)
- **Timeline:** 1 week
- **Action Items:**
  - Purchase and install firewall appliance
  - Configure firewall rules (block unnecessary ports)
  - Enable intrusion detection
  - Set up logging and monitoring
- **Expected Impact:** Reduces R-003 by 80%

**3. Enforce Strong Password Policy**
- **Cost:** $0 (policy) + $200/year (password manager)
- **Timeline:** Immediate
- **Action Items:**
  - Require 12+ character passwords
  - Enforce complexity (uppercase, lowercase, numbers, symbols)
  - Implement password manager (LastPass, 1Password)
  - Enable MFA on all critical systems
  - Force password reset for all users
- **Expected Impact:** Reduces R-002 by 70%

### Short-term Actions (Month 1) - High Priority

**4. Security Awareness Training**
- **Cost:** $500 - $1,500 (training program)
- **Timeline:** 2 weeks
- **Action Items:**
  - Conduct phishing awareness workshop
  - Provide security best practices guide
  - Run simulated phishing tests
  - Create security policy document
  - Require annual training
- **Expected Impact:** Reduces R-004 by 60%

**5. Deploy Antivirus on All Devices**
- **Cost:** $600/year (20 licenses)
- **Timeline:** 1 week
- **Action Items:**
  - Purchase enterprise antivirus (Kaspersky, Bitdefender)
  - Install on all workstations
  - Configure automatic updates
  - Enable real-time protection
  - Set up centralized management
- **Expected Impact:** Reduces R-005 by 75%

**6. Encrypt Sensitive Data**
- **Cost:** $0 - $500 (encryption software)
- **Timeline:** 2 weeks
- **Action Items:**
  - Enable BitLocker on all laptops
  - Encrypt database at rest
  - Use encrypted file storage
  - Implement TLS for data in transit
- **Expected Impact:** Reduces R-006 by 80%

**7. Upgrade WiFi Security**
- **Cost:** $300 - $800 (new router if needed)
- **Timeline:** 1 week
- **Action Items:**
  - Upgrade to WPA3 if possible
  - Change WiFi password (20+ characters)
  - Hide SSID broadcast
  - Enable MAC address filtering
  - Create separate guest network
- **Expected Impact:** Reduces R-007 by 70%

**8. Update All Software**
- **Cost:** $0 - $1,000 (license upgrades)
- **Timeline:** 2 weeks
- **Action Items:**
  - Audit all installed software
  - Update Windows to latest version
  - Enable automatic updates
  - Remove unused/outdated software
  - Create update schedule
- **Expected Impact:** Reduces R-008 by 85%

### Medium-term Actions (Month 2-3) - Medium Priority

**9. Implement Access Control**
- **Cost:** $0 (policy implementation)
- **Timeline:** 2 weeks
- **Action Items:**
  - Define user roles and permissions
  - Implement principle of least privilege
  - Remove unnecessary admin rights
  - Create access request process
  - Regular access reviews
- **Expected Impact:** Reduces R-009 by 60%

**10. Develop Incident Response Plan**
- **Cost:** $0 - $2,000 (consultant if needed)
- **Timeline:** 3 weeks
- **Action Items:**
  - Create IR playbook
  - Define incident classification
  - Assign response team roles
  - Document escalation procedures
  - Conduct tabletop exercise
- **Expected Impact:** Reduces R-010, R-015 by 50%

**11. Improve Physical Security**
- **Cost:** $500 - $1,500
- **Timeline:** 2 weeks
- **Action Items:**
  - Install visitor log system
  - Lock server room (keycard access)
  - Install security cameras
  - Implement clean desk policy
  - Cable locks for laptops
- **Expected Impact:** Reduces R-011 by 70%

**12. Enable Log Monitoring**
- **Cost:** $0 - $1,000/year (SIEM tool)
- **Timeline:** 3 weeks
- **Action Items:**
  - Enable logging on all systems
  - Centralize logs (Splunk free, ELK)
  - Create monitoring alerts
  - Weekly log review process
  - Retain logs for 90 days
- **Expected Impact:** Reduces R-012 by 60%

---

## 💰 Budget Summary

### Total Investment Required

| Priority | Action Items | Cost Range | Timeline |
|----------|-------------|------------|----------|
| Critical | 3 items | $1,700 - $4,700 | Week 1-2 |
| High | 5 items | $1,400 - $4,300 | Month 1 |
| Medium | 4 items | $500 - $4,500 | Month 2-3 |
| **Total** | **12 items** | **$3,600 - $13,500** | **3 months** |

### Annual Recurring Costs
- Backup service: $600/year
- Antivirus licenses: $600/year
- Password manager: $200/year
- Firewall (if cloud): $360/year
- Training: $500/year
- **Total Annual:** $2,260/year

### ROI Analysis
- **Investment:** $3,600 - $13,500 (one-time) + $2,260/year
- **Potential Loss Prevention:** $50,000 - $150,000 per incident
- **ROI:** 370% - 4,000% (single incident prevented)
- **Payback Period:** < 3 months

---

## 📋 Implementation Roadmap

### Phase 1: Critical (Week 1-2)
```
Week 1:
✓ Day 1-2: Purchase backup solution
✓ Day 3-4: Configure backups
✓ Day 5: Test backup restoration
✓ Day 5: Implement password policy
✓ Day 5: Force password reset

Week 2:
✓ Day 1-3: Purchase and install firewall
✓ Day 4-5: Configure firewall rules
✓ Day 5: Test firewall effectiveness
```

### Phase 2: High Priority (Week 3-6)
```
Week 3:
✓ Purchase antivirus licenses
✓ Install antivirus on all devices
✓ Schedule security training

Week 4:
✓ Conduct security training
✓ Enable data encryption
✓ Upgrade WiFi security

Week 5-6:
✓ Update all software
✓ Remove outdated applications
✓ Document all changes
```

### Phase 3: Medium Priority (Week 7-12)
```
Week 7-8:
✓ Define access control policy
✓ Implement role-based access
✓ Review user permissions

Week 9-10:
✓ Develop incident response plan
✓ Assign IR team roles
✓ Conduct tabletop exercise

Week 11-12:
✓ Improve physical security
✓ Enable log monitoring
✓ Final security review
```

---

## 📊 Compliance Considerations

### GDPR Requirements
- ✅ Data encryption (Article 32)
- ✅ Access controls (Article 32)
- ✅ Incident response plan (Article 33)
- ✅ Data backup (Article 32)
- ⚠️ Data Protection Officer (not required for <250 employees)

### ISO 27001 Alignment
- ✅ Asset management (A.8)
- ✅ Access control (A.9)
- ✅ Cryptography (A.10)
- ✅ Physical security (A.11)
- ✅ Incident management (A.16)

---

## 📞 Next Steps

### Immediate Actions for Client
1. **Review this report** with management team
2. **Approve budget** for critical items ($1,700 - $4,700)
3. **Assign responsibility** for implementation
4. **Schedule follow-up** meeting in 2 weeks
5. **Begin implementation** of Phase 1

### Follow-up Assessment
- **Timeline:** 3 months after implementation
- **Scope:** Verify all recommendations implemented
- **Deliverable:** Progress report with updated risk scores
- **Cost:** $500 - $1,000

---

## 📄 Appendices

### Appendix A: Detailed Asset List
See attached: `asset_inventory.xlsx`

### Appendix B: Vulnerability Scan Results
See attached: `vulnerability_scan.pdf`

### Appendix C: Security Policy Templates
See attached: `security_policies.docx`

### Appendix D: Incident Response Playbook
See attached: `incident_response_plan.pdf`

---

## 📝 Report Metadata

**Document Classification:** Confidential  
**Version:** 1.0  
**Date:** February 25, 2026  
**Prepared by:** Mariam Khalil, Cybersecurity Analyst  
**Reviewed by:** [Client Name]  
**Next Review:** May 25, 2026 (3 months)

---

## ✍️ Analyst Certification

I, Mariam Khalil, certify that this risk assessment was conducted using industry-standard methodologies and represents an accurate evaluation of TechStart Solutions' cybersecurity posture as of February 25, 2026.

**Signature:** _Mariam Khalil_  
**Date:** February 25, 2026  
**Certifications:** GCFA, GCFE, Security+

---

**End of Report**

---

## 📧 Contact Information

For questions or clarification regarding this assessment:

**Mariam Khalil**  
Cybersecurity Analyst  
Email: mariamkhalil812005@gmail.com  
Phone: +20-XXX-XXX-XXXX  
LinkedIn: linkedin.com/in/mariam-khalil-b80aa427b

---

**Confidentiality Notice:** This document contains confidential information intended only for TechStart Solutions. Unauthorized distribution is prohibited.
