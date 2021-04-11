/*
 * @Author: haitaodesign
 * @Date: 2021-04-11 16:04:04
 * @LastEditTime: 2021-04-11 16:50:14
 * @LastEditors: Please set LastEditors
 * @Description: Git 相关操作命令
 * @FilePath: /resume/Users/lihaitao/Desktop/github/cli/src/git.ts
 */

import Shell from 'shelljs';

const CONFIG = {
  github: {
    name: 'haitaodesign',
    email: 'lihaitaodesign@gmail.com',
  },
  gitlab: {
    name: 'liht',
    email: 'liht@dustess.com',
  },
};

interface Config {
  name: string;
  email: string;
}
class Git {
  constructor() {
    this.config = CONFIG;
  }
  config: Object;

  setGit(config: Config) {
    if (!Shell.which('git')) {
      Shell.echo('Sorry, this script requires git');
      Shell.exit(1);
    } else {
      Shell.exec(`git config --global user.name ${config.name}`);
      Shell.exec(`git config --global user.email ${config.email}`);
      Shell.exec('git config --list');
    }
  }

  switchGit(platform: string) {
    this.setGit(this.config[platform]);
  }
}

export default new Git();
