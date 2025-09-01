# FakeNews_Analysis

A Data Analytics Project by MEC
PROJECT BY:
Eysah Ali, Nathaniel Collins, Monique Britto

1. Installing Docker:
   Download Docker Desktop from website

2. Installing mssql image from cmd:
   Using windows powershell, run :
   docker pull mcr.microsoft.com/mssql/server:2025-latest

3. Create docker container using mssql image
   Using CLI, copy and run this command:
   docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD="YourStrong!Passw0rd" -p 1433:1433 --name fake-news-sqlserv -v fake-news-vol:/var/opt/mssql -d mcr.microsoft.com/mssql/server:2025-latest

4. Check if container was created and is running:
   Use the following to check if container is running, status should say up:
   docker ps
   docker -a
   On docker desktop, navigate to container section, you should see the container created and in use
   you can also check localhost:1433

5. Connect to mssql
   type to login to database, you will see 1> on the interface
   sqlcmd -U sa -P YourStrong!Passw0rd

6. Testing connection:
   To run commands on the mssql
   type sql e.g.
   Select GETDATE() as currentTime;
   GO
   Should return the current time

7. Connect React app to mssql server:
   npm run connect

8. Running react app:
   npm run dev
   Click on link or type localhost:5174 in url
9. To use express backend, type localhost:5000 to test routes
