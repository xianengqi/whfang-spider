import log4js from 'log4js';
import DbHelper from '../utils/dbHelper';
import { add } from 'lodash';
import { resolve } from 'path';

const mongoose = DbHelper.connect();
const logger = log4js.getLogger('globallog');

// 创建数据库
const HouseSchema = new mongoose.Schema({
  _id: String,
  area: String,
  name: String,
  number: Number,
  beginTime: String,
  endTime: String,
  status: String
});
// 创建表
const HouseCol = mongoose.model('house-wuhan', HouseSchema);

const HouseModel = {
  /**
   * 新增一个房源信息，若存在，则更新
   * @param {cdFang.IhouseData} item
   * @return {(Promise<boolean | cdFang.IhouseData>)}
   */
  async add(item: cdFang.IhouseData): Promise<boolean | cdFang.IhouseData> {
    let result: boolean | cdFang.IhouseData = item;
    const findItem = await this.find({ _id: item._id });
    if (findItem.length > 0) {
      if (findItem[0].status !== item.status) {
        this.update(item);
      } else {
        result = false;
      }
    } else {
      const house = new HouseCol(item);
      result = await new Promise(resolve => {
        house.save(err => {
          if (err) {
            logger.error(JSON.stringify(err));
            resolve(false);
          }
        })
      })
    }
    return result;
  }
}
