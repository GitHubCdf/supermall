import {request} from "./request"

// 請求詳情信息
export function getDetailData(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}
// 请求recommend 推荐信息
export function getRecommendData() {
  return request({
    url: '/recommend'
  })
}

export class Goods {
  constructor(itemInfo, columns, services) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services
    this.realPrice = itemInfo.lowNowPrice
  }
}