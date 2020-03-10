const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const axios = require('axios');
const Confirm = require('prompt-confirm');

// Do this as the first thing so that any code reading it knows the right env.

let mode = 'development';
let project = '';
// let argv = null;
let project_settings = {};

if( process.argv.indexOf('--mode') !== -1){
  const idx = +process.argv.indexOf('--mode') + 1
  if(process.argv.slice(idx)[0] === 'dev' || process.argv.slice(idx)[0] === 'prod') {
    mode = process.argv.slice(idx)[0] === 'dev' ? 'development' : 'production'
  }
}

if(process.argv.indexOf('--project') !== -1){
  const idx = +process.argv.indexOf('--project') +1
  project = process.argv.slice(idx)[0]
}else if(process.argv.slice(2)[0] !== '--mode' && process.argv.slice(2)[0] !== '--project'){
   project = process.argv.slice(2)[0]
  }

process.env.BABEL_ENV = mode;
process.env.NODE_ENV = mode;

//API_KEY_FIGMA
const figmaApiKey = '';
//ID_PROJECT
const figmaProjectId = '';

// const flagServer = argv.indexOf('local') !== -1;
// const copyCDN = argv.indexOf('cdn') !== -1;

const NODE_ENV = process.env.NODE_ENV || 'development';

try {
  if(project){ //###### ОБНОВЛЕНИЯ ФАЙЛА ФИГМЫ ДЛЯ ОПРЕДЕЛЕННОГО ПРОЕКТА - ПОКА НЕ РЕАЛИЗОВАННО
      if(!fs.existsSync(path.join(__dirname,`../src/project/${project}/conf.json`))) { 
        throw new Error(chalk.red(`Project "${project}" not found ¯\\_(-_-)_/¯`));
      }
      project_settings = require(`../src/project/${project}/conf.json`);
      project_settings.dev.appBuild = '';
      process.env.PROJECT = JSON.stringify({...project_settings.main, ...project_settings.dev});
      process.env.PROJECT_NAME = project;
 
      // Ensure environment variables are read.
      require('../config/env');

      confirm(`Are you sure you want to rebuild figma in the ${project} project in ${mode} mode?`).then(answer => {
        if(answer && answer === true) {
          // getFigmaDocument(figmaProjectId )
          console.log(chalk.cyan('Module in development! Use the command \'npm build-figma\''))
        } else {
          console.log(chalk.cyan('Operation canceled!'))
          return false;
        }
      }).catch(e=>{
        console.log(chalk.red('Something went wrong ¯\\_(ツ)_/¯'), e)
      }) 
  }else{ //###### ОБНОВЛЕНИЯ ФАЙЛА ФИГМЫ ДЛЯ ВСЕХ ПРОЕКТОВ
        confirm(`Are you sure you want to rebuild figma in all projects in ${mode} mode?`).then(answer => {
          if(answer && answer === true) {
            getFigmaDocument(figmaProjectId)
          } else {
            console.log(chalk.cyan('Operation canceled!'));
            return false;
          }
        }).catch(e=>{
          console.log(chalk.red('Something went wrong ¯\\_(ツ)_/¯'), e)
        })
  }
} catch (e) {
  console.log(e)
  console.log(chalk.red('\nError in the process of rebuilding figma¯\\_(-_-)_/¯'));
  return false;
}

async function getFigmaDocument(figmaId) {
  const file = path.join(__dirname,'../src/lib/figma', 'figma.json');
  try {
    const response = await axios({
      method: 'get',
      url: `https://api.figma.com/v1/files/${figmaId}`,
      headers: { 'X-FIGMA-TOKEN': figmaApiKey },
    });

    const result = await response.data;

    const options = NODE_ENV === 'development' ? JSON.stringify(result, null, '\t') : JSON.stringify(result)

    fs.exists(file, (exists) => {
      if(!exists){
        fs.mkdir(path.join(__dirname,'../src/lib/figma'),{ recursive: true }, function(err) {
          if (err) throw err;

          printFile(file, options)
        })
      } else {
        printFile(file, options)
      }
    });

  } catch (e) {
    console.error(chalk.red('\nError getting figma file ¯\\_(ツ)_/¯:'), e.message);
  }
}

function printFile(file, options) {  
  fs.writeFile(file, options, function(e) {
    if (e) { //если возникла ошибка записи
      console.error(chalk.red('\nError failed to overwri  te file'), e.message);
    } 
    console.log(chalk.green('\nData from figma received successfully! _( ͡° ͜ʖ ͡°)_ '));
  });
}

function confirm(question) {
  return new Confirm(question)
  .run()
  .then(function(answer) {
    return answer;
  });
}