������������ ������ ������� �����������:
����� ���
C:\app\java\jre1.8.0_92\bin\keytool.exe -genkeypair -alias vg -keyalg RSA -dname "CN=vg" -keystore vg.jks -keypass 1q2w3e4r -storepass 1q2w3e4r
C:\app\java\jre1.8.0_92\bin\keytool.exe -export -keystore vg.jks -alias vg -rfc -storepass 1q2w3e4r -file vg.cer
C:\app\openSSL\bin\openssl.exe x509 -inform pem -pubkey -in vg.cer 
, �� � ������ Gradle-������ createJwtTokenKeystoreAndPublicKey


http://localhost:8888/auth/default
http://localhost:8761/
http://localhost:8081/test
http://localhost:8080/#/dashboard

Account
��� bootRun
http://localhost:8080/db-console


h2-������
http://localhost:8082/

jdbc:h2:metadata

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d auth

jdbc:h2:tcp://localhost:8082/metadata