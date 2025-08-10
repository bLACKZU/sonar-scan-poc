# Sample Node.js Application

This is a simple Node.js app for SonarQube scanning POC.

## Files
- `node-app/index.js`: Main JS file
- `node-app/package.json`: NPM config

# Sample Python Application

This is a simple Python app for SonarQube scanning POC.

## Files
- `python-app/app.py`: Main Python file

# SonarQube Scan with Docker

1. Build and run SonarQube Docker container:
   ```powershell
   docker run -d --name sonarqube -p 9000:9000 sonarqube
   ```
2. Mount your code and run scan (replace `<path>` with your code path):
   ```powershell
   # Example for mounting code
   docker run -d --name sonarqube -p 9000:9000 -v <path>:/usr/src sonarqube
   ```
3. Access SonarQube at [http://localhost:9000](http://localhost:9000)

4. Use SonarScanner CLI or plugin to scan the code inside the container.

---

Both sample apps include intentional code quality issues for SonarQube to detect.
