@ECHO OFF
SETLOCAL
PUSHD %~dp0..\doc

:: Command file for Sphinx documentation

SET SOURCEDIR=source
SET BUILDDIR=build

CALL:assert_command sphinx-build
IF ERRORLEVEL 1 (
	ECHO.
	ECHO.Install Sphinx with:
	ECHO.
	ECHO.sudo pip install sphinx
	ECHO.or
	ECHO.pip install --user sphinx
	ECHO.
	ECHO.Or grab it from http://sphinx-doc.org/
	EXIT /b 1
)

IF "%1" == "" GOTO:help

IF NOT EXIST "%SOURCEDIR%\_static\" MKDIR "%SOURCEDIR%\_static"
IF NOT EXIST "%SOURCEDIR%\_templates\" MKDIR "%SOURCEDIR%\_templates"

CALL sphinx-build -M %1 %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
GOTO:end

:assert_command
SET NAME=%1
WHERE %NAME% >NUL 2>&1
IF ERRORLEVEL 1 (
	ECHO.
	ECHO.The command '%NAME%' was not found in PATH.
	EXIT /B 1
)
GOTO:EOF

:help
CALL sphinx-build -M help %SOURCEDIR% %BUILDDIR% %SPHINXOPTS%
ECHO.
ECHO.NOTE: Replace 'make' with 'auto\doc_build.cmd' in this project.

:end
POPD
