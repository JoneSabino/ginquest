::BatchSubstitude - parses a File line by line and replaces a substring"
::syntax: BatchSubstitude.bat OldStr NewStr File
::          OldStr [in] - string to be replaced
::          NewStr [in] - string to replace with
::          File   [in] - file to be parsed
:$changed 20100115
:$source http://www.dostips.com

:: Troca do Prontuário
SET FILE=ginquest_svn_temp.log
SET NFILE=ginquest_temp.txt
del %NFILE% /q

findstr /R /N "^" %FILE% | find /C ":" >0 && set /p contador=<0
del 0 /q
echo 1

for /f "tokens=1,* delims=]" %%A in ('"type %FILE%|find /n /v """') do (
    set "line=%%B"

    cls
    echo Por favor aguarde!
    echo.
    echo Substituindo UserIDs... %%A de %contador% linhas]

    echo.
    echo.

    echo Percorrendo:
    echo %%B

    if defined line (
		call set "line=%%line:SP060835=Professor Ivan%%" 
        call set "line=%%line:sp1672576=Jones Sabino%%"
        call set "line=%%line:sp1674706=Murilo Vicente%%"
        call set "line=%%line:sp1666339=Renata Gadelha%%"
        call set "line=%%line:sp167031X=Rodrigo Bressan%%"
        call set "line=echo.%%line:sp670425=Victor Kawamoto%%"

        for /f "delims=" %%X in ('"echo."%%line%%""') do %%~X >> "%NFILE%"
    )

)

copy ginquest_temp.txt ginquest.log
del ginquest_svn_temp.log /q
del ginquest_temp.txt
del ginquest_gource_temp.log

exit

exit