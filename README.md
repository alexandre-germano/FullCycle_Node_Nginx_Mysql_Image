# FullCycle_Node_Nginx_Mysql_Image
A simple image with a Node.Js app (Container 1) connecting to MySql (Container 2) and using a reverse proxy with nginx (Container 3). 

Steps:
1 - Use this command in yaml directory: docker compose up -d --build

2 - Check using this url: http://localhost:8080/

Workflow:
browser -> Request -> nginx (port 8080) -> nodeJs (port 3000) -> MySql (port 3006) -> nodeJs -> nginx -> response -> browser