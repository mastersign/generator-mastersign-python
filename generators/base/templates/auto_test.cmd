@ECHO OFF
SETLOCAL
PUSHD "%~dp0.."

:: RUN TESTS ::

CALL:FLAKE8 --select=E901,E999,F821,F822,F823 --show-source --statistics
IF %STATUS% GEQ 1 GOTO:ERROR

CALL:FLAKE8 --max-complexity=10 --statistics
IF %STATUS% GEQ 1 GOTO:ERROR

CALL:UNITTEST discover
IF %STATUS% GEQ 1 GOTO:ERROR

CALL:DOCTEST <%= rootPackage %>/<%= mainModule %>.py
IF %STATUS% GEQ 1 GOTO:ERROR

GOTO:END

:: PROCEDURES ::

:END
POPD
GOTO:EOF

:FLAKE8
ECHO.
ECHO.Checking Code Style
ECHO.======================================================================
ECHO.%*
ECHO.
CALL flake8 . %*
SET STATUS=%ERRORLEVEL%
IF %STATUS% == 0 ECHO.OK
IF %STATUS% GEQ 1 EXIT /B %STATUS%
GOTO:EOF

:UNITTEST
ECHO.
ECHO.Running Unit Tests
ECHO.======================================================================
ECHO.
CALL python -m unittest %*
SET STATUS=%ERRORLEVEL%
IF %STATUS% GEQ 1 EXIT /B %STATUS%
GOTO:EOF

:DOCTEST
ECHO.
ECHO.Running Doc Tests
ECHO.======================================================================
ECHO.
CALL python -m doctest %*
SET STATUS=%ERRORLEVEL%
IF %STATUS% == 0 ECHO.OK
IF %STATUS% GEQ 1 EXIT /B %STATUS%
GOTO:EOF

:ERROR
POPD
EXIT /B %STATUS%
