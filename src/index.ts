/*
 * @Author: haitaodesign
 * @Date: 2021-04-08 14:32:09
 * @LastEditTime: 2021-04-11 17:00:08
 * @LastEditors: Please set LastEditors
 * @Description: 个人效率提升工具
 * @FilePath: /resume/Users/lihaitao/Desktop/github/cli/src/index.ts
 */

import Git from './Git';
import Arg from 'arg';
const args = Arg({ '--platform': String });
const platform: any = args['--platform'];
// 获取命名行参数，切换不同的平台
Git.switchGit(platform);
