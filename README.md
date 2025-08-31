# FakeNews_Analysis
A Data Analytics Project by MEC
PROJECT BY: 
Eysah Ali, Nathaniel Collins, Monique Britto


Installing Docker: Download Docker Desktop from website
Installing mssql image on docker:
Using windows powershell, run : 
docker pull mcr.microsoft.com/mssql/server:2025-latest
Using Docker Desktop, Click on images Tab, you should see the mssql image, click run.
Using CLI, type (change password and name): 
docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=YourStrong!Passw0rd" -p 1433:1433 --name sql2025 -v sqlvolume:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2022-latest
