@echo off
title Title: Ggg Cmd
color 1f
echo "GggMessage: Cmd started." 
echo.
::=============================================================================
call npm install bluebird --save
echo "GggMessage: bluebird installed." 
echo. 
::=============================================================================
call npm install winston-daily-rotate-file --save
echo "GggMessage: winston-daily-rotate-file installed." 
echo. 
::============================================================================= 
call npm install winston --save
echo "GggMessage: winston installed." 
echo. 
::============================================================================= 
call npm install chai --save
echo "GggMessage: chai installed." 
echo. 
::============================================================================= 
:: https://github.com/jhnns/rewire 
call npm install rewire --save
echo "GggMessage: rewire installed." 
echo.  
::============================================================================= 
call npm install debug --save
echo "GggMessage: debug installed." 
echo.  
::=============================================================================
echo "GggMessage: Application ended." 
echo.
pause
::pause>nul