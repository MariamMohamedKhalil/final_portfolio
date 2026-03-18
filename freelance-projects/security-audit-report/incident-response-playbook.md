# Incident Response Playbook

## Document Information
**Organization:** TechCorp Solutions  
**Prepared by:** Mariam Khalil - Digital Forensics Specialist  
**Last Updated:** February 25, 2026  
**Version:** 1.0

---

## Table of Contents
1. [Introduction](#introduction)
2. [Incident Classification](#incident-classification)
3. [Response Team](#response-team)
4. [Response Procedures](#response-procedures)
5. [Communication Plan](#communication-plan)
6. [Post-Incident Activities](#post-incident-activities)

---

## Introduction

This playbook provides step-by-step procedures for responding to cybersecurity incidents. It ensures consistent, effective response to minimize damage and recovery time.

### Objectives
- Contain and mitigate security incidents quickly
- Preserve evidence for forensic analysis
- Minimize business impact
- Comply with legal and regulatory requirements
- Learn from incidents to improve security posture

---

## Incident Classification

### Severity Levels

#### CRITICAL (P1)
- Active data breach
- Ransomware infection
- Complete system compromise
- Customer data exposure
- **Response Time:** Immediate (< 15 minutes)

#### HIGH (P2)
- Malware infection (contained)
- Unauthorized access attempt
- DDoS attack
- Insider threat indicators
- **Response Time:** < 1 hour

#### MEDIUM (P3)
- Phishing attempts
- Policy violations
- Suspicious network activity
- **Response Time:** < 4 hours

#### LOW (P4)
- Security awareness issues
- Minor policy violations
- **Response Time:** < 24 hours

---

## Response Team

### Core Team Members

**Incident Commander**
- Overall incident coordination
- Decision-making authority
- Stakeholder communication

**Security Analyst** (Mariam Khalil)
- Threat analysis
- Forensic investigation
- Evidence collection
- Remediation recommendations

**IT Operations**
- System isolation
- Backup restoration
- Infrastructure changes

**Legal Counsel**
- Regulatory compliance
- Legal implications
- Law enforcement coordination

**Communications**
- Internal communications
- External PR
- Customer notifications

---

## Response Procedures

### Phase 1: Detection & Analysis

#### Step 1: Initial Alert
```
Time: T+0 minutes
Responsible: SOC Analyst / Automated System
```

**Actions:**
1. Document alert details
   - Timestamp
   - Alert source
   - Affected systems
   - Initial indicators

2. Verify the incident
   - Rule out false positives
   - Gather additional context
   - Check related logs

3. Classify severity level

**Tools:**
- SIEM dashboard
- IDS/IPS alerts
- Endpoint detection logs

---

#### Step 2: Incident Declaration
```
Time: T+15 minutes
Responsible: Security Analyst
```

**Actions:**
1. Create incident ticket
2. Notify Incident Commander
3. Assemble response team
4. Initiate incident log

**Template:**
```
INCIDENT ID: INC-2026-0225-001
SEVERITY: [P1/P2/P3/P4]
DETECTED: 2026-02-25 14:30 UTC
AFFECTED SYSTEMS: [List]
INITIAL ASSESSMENT: [Brief description]
```

---

### Phase 2: Containment

#### Short-term Containment
```
Time: T+30 minutes
Responsible: IT Operations + Security Analyst
```

**Actions:**
1. **Isolate affected systems**
   ```bash
   # Disable network interface
   sudo ifconfig eth0 down
   
   # Block IP at firewall
   sudo iptables -A INPUT -s [MALICIOUS_IP] -j DROP
   ```

2. **Preserve evidence**
   - Take memory dump
   - Capture network traffic
   - Save system logs
   - Document system state

3. **Prevent spread**
   - Disable compromised accounts
   - Block malicious IPs
   - Quarantine infected files

**Evidence Collection Commands:**
```bash
# Memory dump
sudo dd if=/dev/mem of=/forensics/memory.dump

# Disk image
sudo dd if=/dev/sda of=/forensics/disk.img bs=4M

# Network capture
sudo tcpdump -i eth0 -w /forensics/traffic.pcap

# System snapshot
sudo tar -czf /forensics/system-snapshot.tar.gz /var/log /etc
```

---

#### Long-term Containment
```
Time: T+2 hours
Responsible: IT Operations
```

**Actions:**
1. Apply temporary patches
2. Implement additional monitoring
3. Deploy compensating controls
4. Update firewall rules

---

### Phase 3: Eradication

```
Time: T+4 hours
Responsible: Security Analyst + IT Operations
```

**Actions:**
1. **Identify root cause**
   - Analyze attack vectors
   - Review vulnerability exploited
   - Determine entry point

2. **Remove threat**
   ```bash
   # Remove malware
   sudo rm -rf /tmp/malicious_file
   
   # Kill malicious processes
   sudo kill -9 [PID]
   
   # Remove persistence mechanisms
   sudo crontab -r -u compromised_user
   ```

3. **Patch vulnerabilities**
   - Apply security updates
   - Fix configuration issues
   - Close security gaps

4. **Strengthen defenses**
   - Update IDS/IPS signatures
   - Enhance monitoring rules
   - Implement additional controls

---

### Phase 4: Recovery

```
Time: T+8 hours
Responsible: IT Operations
```

**Actions:**
1. **Restore systems**
   - Rebuild from clean backups
   - Verify system integrity
   - Test functionality

2. **Validate security**
   - Scan for remaining threats
   - Verify patches applied
   - Test security controls

3. **Monitor closely**
   - Enhanced logging
   - Continuous monitoring
   - Watch for reinfection

**Validation Checklist:**
- [ ] All malware removed
- [ ] Vulnerabilities patched
- [ ] Accounts secured
- [ ] Logs reviewed
- [ ] Systems tested
- [ ] Monitoring active

---

### Phase 5: Post-Incident

```
Time: T+24 hours
Responsible: Incident Commander + Security Analyst
```

**Actions:**
1. **Document incident**
   - Timeline of events
   - Actions taken
   - Evidence collected
   - Lessons learned

2. **Conduct post-mortem**
   - What happened?
   - How was it detected?
   - What worked well?
   - What needs improvement?

3. **Update procedures**
   - Refine playbooks
   - Update detection rules
   - Improve controls

---

## Communication Plan

### Internal Communication

**Immediate Notification (P1/P2)**
- Incident Commander
- CISO
- CTO
- CEO (for P1)

**Regular Updates**
- Every 2 hours for P1
- Every 4 hours for P2
- Daily for P3/P4

### External Communication

**Regulatory Notification**
- GDPR: Within 72 hours of discovery
- HIPAA: Within 60 days
- PCI DSS: Immediately for card data breach

**Customer Notification**
- Required if personal data compromised
- Coordinate with Legal and PR
- Use approved templates

**Law Enforcement**
- Contact for criminal activity
- Coordinate evidence preservation
- Follow legal guidance

---

## Forensic Analysis Procedures

### Digital Evidence Collection

**Chain of Custody Form**
```
EVIDENCE ID: [Unique ID]
COLLECTED BY: [Name]
DATE/TIME: [Timestamp]
LOCATION: [System/Path]
DESCRIPTION: [Details]
HASH (SHA-256): [Hash value]
STORED AT: [Location]
```

### Analysis Steps

1. **Create forensic copy**
   ```bash
   # Create bit-by-bit copy
   sudo dd if=/dev/sda of=/forensics/evidence.img bs=4M conv=noerror,sync
   
   # Calculate hash
   sha256sum /forensics/evidence.img > /forensics/evidence.img.sha256
   ```

2. **Timeline analysis**
   - File system timeline
   - Log correlation
   - Network activity timeline

3. **Artifact examination**
   - Browser history
   - Registry keys (Windows)
   - Bash history (Linux)
   - Scheduled tasks
   - Network connections

4. **Malware analysis**
   - Static analysis
   - Dynamic analysis (sandbox)
   - Indicator extraction

---

## Tools & Resources

### Forensic Tools
- **Autopsy** - Digital forensics platform
- **Volatility** - Memory forensics
- **Wireshark** - Network analysis
- **FTK Imager** - Disk imaging
- **Sleuth Kit** - File system analysis

### SIEM Queries

**Suspicious Login Activity:**
```sql
index=security sourcetype=auth
| stats count by user, src_ip
| where count > 10
```

**Malware Indicators:**
```sql
index=endpoint sourcetype=sysmon EventCode=1
| search CommandLine="*powershell*" AND CommandLine="*-enc*"
```

**Data Exfiltration:**
```sql
index=network
| stats sum(bytes_out) as total_out by src_ip
| where total_out > 1000000000
```

---

## Incident Report Template

```markdown
# Incident Report: [INC-ID]

## Executive Summary
[Brief overview of incident]

## Incident Details
- **Incident ID:** INC-2026-0225-001
- **Severity:** P1
- **Detection Time:** 2026-02-25 14:30 UTC
- **Resolution Time:** 2026-02-26 08:15 UTC
- **Duration:** 17 hours 45 minutes

## Timeline
| Time | Event |
|------|-------|
| 14:30 | Initial detection |
| 14:45 | Incident declared |
| 15:00 | Containment initiated |
| 18:00 | Threat eradicated |
| 08:15 | Systems restored |

## Impact Assessment
- **Systems Affected:** [List]
- **Data Compromised:** [Details]
- **Business Impact:** [Description]
- **Financial Impact:** $[Amount]

## Root Cause
[Detailed analysis]

## Actions Taken
1. [Action 1]
2. [Action 2]
3. [Action 3]

## Lessons Learned
### What Went Well
- [Item 1]
- [Item 2]

### Areas for Improvement
- [Item 1]
- [Item 2]

## Recommendations
1. [Recommendation 1]
2. [Recommendation 2]

## Appendices
- Evidence logs
- Forensic reports
- Communication records
```

---

## Contact Information

### Emergency Contacts

**Security Team**
- Mariam Khalil (Security Analyst): +20-XXX-XXX-XXXX
- SOC Hotline: +20-XXX-XXX-XXXX (24/7)

**Management**
- CISO: +20-XXX-XXX-XXXX
- CTO: +20-XXX-XXX-XXXX

**External**
- Cyber Insurance: +1-XXX-XXX-XXXX
- Legal Counsel: +20-XXX-XXX-XXXX
- Law Enforcement: 122 (Egypt Cybercrime Unit)

---

**Document Classification:** CONFIDENTIAL  
**Review Cycle:** Quarterly  
**Next Review Date:** May 25, 2026
