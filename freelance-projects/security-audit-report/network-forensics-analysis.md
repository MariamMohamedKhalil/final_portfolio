# Network Forensics Analysis Report

## Case Information
**Case ID:** NFA-2026-0225  
**Analyst:** Mariam Khalil - Digital Forensics Specialist  
**Date:** February 25, 2026  
**Client:** TechCorp Solutions  
**Incident Type:** Suspected Data Exfiltration

---

## Executive Summary

This report documents the network forensic analysis conducted following the detection of suspicious network activity on February 24, 2026. The investigation revealed unauthorized data exfiltration through a compromised employee workstation.

**Key Findings:**
- Confirmed data breach: 2.3 GB of sensitive data exfiltrated
- Attack vector: Spear-phishing email with malicious attachment
- Attacker IP: 185.220.101.45 (TOR exit node)
- Duration: 6 hours (02:00 - 08:00 UTC)
- Compromised system: WS-FINANCE-07

---

## Investigation Methodology

### Tools Used
1. **Wireshark** - Packet capture analysis
2. **NetworkMiner** - Network forensic analysis
3. **Zeek (Bro)** - Network security monitoring
4. **Splunk** - Log aggregation and analysis
5. **VirusTotal** - Malware analysis
6. **Autopsy** - Disk forensics

### Evidence Sources
- Network packet captures (PCAP files)
- Firewall logs
- Proxy server logs
- DNS query logs
- Endpoint detection logs
- Email server logs

---

## Timeline of Events

### February 24, 2026

**09:15 UTC** - Initial Compromise
```
Event: Phishing email received
To: john.doe@techcorp.com
From: hr-department@techc0rp.com (spoofed)
Subject: "Urgent: Update Your Benefits Information"
Attachment: benefits_form.pdf.exe (5.2 MB)
```

**09:23 UTC** - Malware Execution
```
Process: benefits_form.pdf.exe
PID: 4892
Parent: outlook.exe
Action: Dropped payload to C:\Users\john.doe\AppData\Local\Temp\svchost.exe
```

**09:25 UTC** - Command & Control (C2) Connection
```
Source IP: 192.168.10.45 (WS-FINANCE-07)
Destination IP: 185.220.101.45:443
Protocol: HTTPS (encrypted)
Bytes Out: 1,247 bytes (beacon)
```

**02:00 UTC** - Data Staging
```
Activity: Large file operations detected
Location: C:\Users\john.doe\AppData\Local\Temp\export\
Files: 1,847 files compressed to archive.zip (2.3 GB)
```

**02:15 UTC** - Data Exfiltration Begins
```
Source: 192.168.10.45:49152
Destination: 185.220.101.45:443
Protocol: HTTPS
Transfer Rate: 5.2 MB/s
Total Data: 2.3 GB
Duration: 6 hours (slow exfiltration to avoid detection)
```

**08:15 UTC** - Exfiltration Complete
```
Final packet sent
Connection terminated
Malware deleted traces
```

**14:30 UTC** - Detection
```
Alert: SIEM detected unusual outbound traffic volume
Analyst: Initiated investigation
```

---

## Network Traffic Analysis

### Packet Capture Analysis

#### Suspicious Connection Pattern
```
Wireshark Filter: ip.dst == 185.220.101.45

Statistics:
- Total Packets: 1,847,293
- Total Bytes: 2,415,919,104 (2.3 GB)
- Duration: 6 hours 0 minutes
- Average Packet Size: 1,308 bytes
- Protocol: TLS 1.2 (encrypted)
```

#### C2 Beacon Pattern
```
Time Interval: Every 60 seconds
Packet Size: ~1,200 bytes (consistent)
Pattern: Regular heartbeat indicating active C2 communication
```

**Wireshark Display Filter:**
```
(ip.src == 192.168.10.45 && ip.dst == 185.220.101.45) && tcp.port == 443
```

---

### DNS Analysis

#### Suspicious DNS Queries
```
Query: update-service.cloudfront-cdn.com
Type: A
Response: 185.220.101.45
TTL: 300 seconds
Frequency: Every 5 minutes
```

**Analysis:**
- Domain registered 3 days before attack
- Registrar: NameCheap (privacy protected)
- Hosting: TOR exit node
- Domain reputation: Malicious (VirusTotal: 12/89 vendors flagged)

---

### HTTP/HTTPS Traffic Analysis

#### TLS Certificate Analysis
```
Certificate Details:
Subject: CN=update-service.cloudfront-cdn.com
Issuer: Let's Encrypt
Valid From: 2026-02-21
Valid To: 2026-05-22
Serial: 04:3f:7a:9b:2c:1d:8e:5f
SHA-256: a7b3c9d2e1f4g5h6i7j8k9l0m1n2o3p4q5r6s7t8u9v0w1x2y3z4
```

**Red Flags:**
- Certificate issued 3 days before attack
- Short validity period
- Free certificate (common in phishing)

---

### Network Flow Analysis

#### Zeek (Bro) Logs

**conn.log Analysis:**
```
ts: 1708747200.000000
uid: CXY9a14Dpqvs8lCvIa
id.orig_h: 192.168.10.45
id.orig_p: 49152
id.resp_h: 185.220.101.45
id.resp_p: 443
proto: tcp
service: ssl
duration: 21600.000000
orig_bytes: 2415919104
resp_bytes: 45892
conn_state: SF
```

**ssl.log Analysis:**
```
ts: 1708747200.000000
uid: CXY9a14Dpqvs8lCvIa
id.orig_h: 192.168.10.45
id.resp_h: 185.220.101.45
version: TLSv12
cipher: TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
server_name: update-service.cloudfront-cdn.com
subject: CN=update-service.cloudfront-cdn.com
issuer: CN=Let's Encrypt Authority X3
```

---

## Malware Analysis

### Static Analysis

**File Information:**
```
Filename: benefits_form.pdf.exe
Size: 5,242,880 bytes (5.0 MB)
MD5: 7d8f9a2b3c4e5f6a7b8c9d0e1f2a3b4c
SHA-1: 9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b
SHA-256: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b
```

**VirusTotal Results:**
- Detection: 47/72 vendors flagged as malicious
- Classification: Trojan.Agent, Backdoor.Generic
- First Seen: 2026-02-21 (3 days before attack)

**PE Analysis:**
```
Compiler: Microsoft Visual C++ 2019
Packer: UPX 3.96 (packed/obfuscated)
Imports: WinInet.dll, Crypt32.dll, Advapi32.dll
Suspicious APIs:
  - CreateProcess
  - WriteProcessMemory
  - VirtualAllocEx
  - InternetOpenA
  - CryptEncrypt
```

---

### Dynamic Analysis (Sandbox)

**Behavioral Analysis:**
```
Execution Environment: Windows 10 Sandbox
Duration: 30 minutes
```

**Observed Behaviors:**
1. **File Operations:**
   - Created: C:\Users\[user]\AppData\Local\Temp\svchost.exe
   - Created: C:\Users\[user]\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\updater.lnk
   - Modified: HKCU\Software\Microsoft\Windows\CurrentVersion\Run

2. **Network Activity:**
   - DNS Query: update-service.cloudfront-cdn.com
   - TCP Connection: 185.220.101.45:443
   - Data Sent: 1,247 bytes (initial beacon)
   - Data Received: 892 bytes (C2 commands)

3. **Process Activity:**
   - Injected code into explorer.exe
   - Created scheduled task: "Windows Update Service"
   - Disabled Windows Defender real-time protection

4. **Data Collection:**
   - Enumerated files in Documents, Desktop, Downloads
   - Captured screenshots every 5 minutes
   - Logged keystrokes
   - Accessed browser saved passwords

---

## Indicators of Compromise (IOCs)

### Network Indicators
```
IP Addresses:
185.220.101.45 (C2 server)
203.0.113.42 (secondary C2)

Domains:
update-service.cloudfront-cdn.com
cdn-update-service.net
windows-security-update.com

URLs:
https://update-service.cloudfront-cdn.com/api/v1/upload
https://185.220.101.45/data/receive
```

### File Indicators
```
MD5 Hashes:
7d8f9a2b3c4e5f6a7b8c9d0e1f2a3b4c (benefits_form.pdf.exe)
3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b (svchost.exe payload)

File Paths:
C:\Users\*\AppData\Local\Temp\svchost.exe
C:\Users\*\AppData\Local\Temp\export\archive.zip
C:\Users\*\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup\updater.lnk
```

### Registry Indicators
```
HKCU\Software\Microsoft\Windows\CurrentVersion\Run\WindowsUpdater
HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\Run\SecurityUpdate
```

### Email Indicators
```
Sender: hr-department@techc0rp.com
Subject: "Urgent: Update Your Benefits Information"
Attachment: benefits_form.pdf.exe
```

---

## Data Exfiltrated

### Sensitive Files Identified
```
Total Files: 1,847
Total Size: 2.3 GB
Categories:
  - Financial Reports: 342 files (450 MB)
  - Customer Database: 1 file (1.2 GB)
  - Employee Records: 89 files (120 MB)
  - Source Code: 1,415 files (530 MB)
```

### Impact Assessment
- **Customer Records:** 45,000 customer records compromised
  - Names, addresses, email addresses
  - Phone numbers
  - Purchase history
  - Payment information (last 4 digits)

- **Employee Data:** 250 employee records
  - Personal information
  - Salary information
  - Social security numbers

- **Intellectual Property:**
  - Proprietary source code
  - Business strategies
  - Financial projections

---

## Attribution Analysis

### Threat Actor Profile
**Likely Group:** APT-28 (Fancy Bear) or similar financially motivated group

**Evidence:**
1. **Tactics, Techniques, and Procedures (TTPs):**
   - Spear-phishing with malicious attachment
   - Use of TOR for anonymity
   - Slow data exfiltration to avoid detection
   - Encrypted C2 communication

2. **Infrastructure:**
   - TOR exit nodes
   - Recently registered domains
   - Let's Encrypt certificates
   - Cloud hosting (difficult to trace)

3. **Targeting:**
   - Financial sector
   - Specific employee targeting
   - Business hours reconnaissance

### MITRE ATT&CK Mapping
```
Initial Access:
  - T1566.001: Phishing - Spearphishing Attachment

Execution:
  - T1204.002: User Execution - Malicious File

Persistence:
  - T1547.001: Registry Run Keys
  - T1053.005: Scheduled Task

Defense Evasion:
  - T1027: Obfuscated Files or Information
  - T1562.001: Impair Defenses - Disable AV

Credential Access:
  - T1555.003: Credentials from Web Browsers
  - T1056.001: Keylogging

Collection:
  - T1005: Data from Local System
  - T1113: Screen Capture
  - T1560.001: Archive via Utility

Command and Control:
  - T1071.001: Web Protocols (HTTPS)
  - T1573.002: Encrypted Channel

Exfiltration:
  - T1041: Exfiltration Over C2 Channel
  - T1020: Automated Exfiltration
```

---

## Forensic Evidence

### Chain of Custody

**Evidence Item 1: Network Packet Capture**
```
Item ID: NFA-2026-0225-001
Description: PCAP file containing suspicious traffic
File: suspicious_traffic_20260224.pcap
Size: 2.4 GB
MD5: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6
Collected By: Mariam Khalil
Date/Time: 2026-02-25 14:45 UTC
Location: Firewall SPAN port
Storage: Forensic server /evidence/NFA-2026-0225/
```

**Evidence Item 2: Compromised Workstation Image**
```
Item ID: NFA-2026-0225-002
Description: Disk image of compromised workstation
File: WS-FINANCE-07_disk_image.dd
Size: 512 GB
SHA-256: 1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b
Collected By: Mariam Khalil
Date/Time: 2026-02-25 16:00 UTC
Location: Finance Department
Storage: Forensic server /evidence/NFA-2026-0225/
```

**Evidence Item 3: Memory Dump**
```
Item ID: NFA-2026-0225-003
Description: RAM dump from compromised system
File: WS-FINANCE-07_memory.dmp
Size: 16 GB
SHA-256: 9z8y7x6w5v4u3t2s1r0q9p8o7n6m5l4k3j2i1h0g9f8e7d6c5b4a3z2y1x0w9v8u
Collected By: Mariam Khalil
Date/Time: 2026-02-25 15:30 UTC
Location: Finance Department
Storage: Forensic server /evidence/NFA-2026-0225/
```

---

## Recommendations

### Immediate Actions (Completed)
- ✅ Isolated compromised workstation
- ✅ Blocked malicious IPs at firewall
- ✅ Disabled compromised user account
- ✅ Forced password reset for all users
- ✅ Deployed IOC hunting across network

### Short-term (1-2 weeks)
1. **Email Security:**
   - Implement advanced email filtering
   - Deploy email sandboxing solution
   - Enable DMARC, SPF, and DKIM
   - Conduct phishing awareness training

2. **Network Security:**
   - Deploy Network Detection and Response (NDR)
   - Implement TLS inspection
   - Enable DNS filtering
   - Deploy deception technology (honeypots)

3. **Endpoint Security:**
   - Deploy EDR solution on all workstations
   - Enable application whitelisting
   - Implement USB device control
   - Enable PowerShell logging

### Long-term (1-3 months)
1. **Security Operations:**
   - Establish 24/7 SOC
   - Implement SOAR platform
   - Deploy threat intelligence feeds
   - Conduct regular threat hunting

2. **Data Protection:**
   - Implement Data Loss Prevention (DLP)
   - Deploy encryption for sensitive data
   - Implement data classification
   - Enable database activity monitoring

3. **Incident Response:**
   - Update incident response plan
   - Conduct tabletop exercises
   - Establish forensic readiness
   - Create playbooks for common scenarios

---

## Lessons Learned

### What Went Well
1. SIEM detected unusual traffic patterns
2. Quick isolation prevented further damage
3. Comprehensive logging enabled thorough investigation
4. Incident response team coordinated effectively

### Areas for Improvement
1. **Detection Delay:** 5 hours between compromise and detection
2. **Email Filtering:** Malicious attachment bypassed filters
3. **User Awareness:** Employee clicked suspicious attachment
4. **Endpoint Protection:** Malware disabled antivirus without alert

### Action Items
- [ ] Tune SIEM rules for faster detection
- [ ] Implement email sandboxing
- [ ] Conduct monthly security awareness training
- [ ] Deploy tamper-proof endpoint protection

---

## Conclusion

The investigation confirmed a sophisticated data breach resulting from a targeted spear-phishing attack. The attacker successfully exfiltrated 2.3 GB of sensitive data over a 6-hour period. The attack demonstrates the need for enhanced email security, improved endpoint protection, and faster detection capabilities.

**Key Takeaways:**
1. Human factor remains the weakest link
2. Encrypted traffic requires TLS inspection
3. Slow exfiltration can evade detection
4. Comprehensive logging is critical for forensics

**Legal Considerations:**
- GDPR notification required (customer data breach)
- Law enforcement notification recommended
- Cyber insurance claim initiated
- Legal counsel engaged for potential litigation

---

## Appendices

### Appendix A: Full Packet Capture Analysis
See attached: `pcap_analysis_detailed.pdf`

### Appendix B: Malware Analysis Report
See attached: `malware_analysis_full.pdf`

### Appendix C: Disk Forensics Report
See attached: `disk_forensics_report.pdf`

### Appendix D: Memory Forensics Report
See attached: `memory_forensics_report.pdf`

### Appendix E: IOC List (Machine-Readable)
See attached: `iocs.json`, `iocs.csv`, `iocs.stix`

---

## Analyst Certification

I, Mariam Khalil, certify that this analysis was conducted using industry-standard forensic methodologies and that all evidence was handled in accordance with proper chain of custody procedures.

**Signature:** _Mariam Khalil_  
**Date:** February 25, 2026  
**Certification:** GCFA, GCFE, CHFI

---

**Document Classification:** CONFIDENTIAL - ATTORNEY-CLIENT PRIVILEGED  
**Distribution:** Authorized Personnel Only  
**Retention:** 7 years per regulatory requirements
