// import fs from 'fs'
// import path from 'path'
import { SidebarConfigArray } from 'vuepress/config'

// const officialPlugins = fs
//   .readdirSync(path.resolve(__dirname, '../plugin/official'))
//   .map(filename => 'official/' + filename.slice(0, -3))
//   .sort()

export function getYPSXSidebar (
  onetTitle: string,
  twoTitle: string,
  threeTitle: string,
  fourTitle: string,
  fiveTitle:string
): SidebarConfigArray {
  const sidebar: SidebarConfigArray = [
    {
      title: onetTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        ''
      ]
    },
    {
      title: twoTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        'about/谊品生鲜发展历程',
        'about/企业文化与规章制度',
        'about/公司杭州地区人员架构'
      ]
    },
    {
      title: threeTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        'common/夜班工作时间工资和工作流程',
        'common/夜班店长工作流程-参考',
        'common/夜班店长工作流程-新版',
        'common/夜班店长工作流程-旧版',
        'common/蔬菜其它注意事项',
        'common/蔬菜保鲜手册',
        'common/水产其它注意事项',
        'common/肉加工其它注意事项',
        'common/其它货物接货流程',
        'common/工作中常见软件推荐',
        'common/收银工作流程',
        'common/其它物品物料检索'
      ]
    },
    {
      title:fourTitle ,
      collapsable: false,
      sidebarDepth:2,
      children: [
        'equipment/谊品生鲜冷柜使用注意事项',
        'equipment/收银机使用教程',
        'equipment/外机清洗',
        'equipment/电闸柜使用',
        'equipment/空调机使用',
        'equipment/电子台秤使用',
        'equipment/条码电子秤使用',
        'equipment/制冰机使用',
        'equipment/打氧机使用',
        'equipment/卧式冷冻柜使用',
        'equipment/肉加工立式冰柜使用',
        'equipment/星星牌低温冻品展示柜使用',
        'equipment/星星牌低温牛奶展示柜使用',
        'equipment/星星牌肉加工展示柜使用',
        'equipment/光猫路由器使用',
        'equipment/监控使用',
        'equipment/其它设备检索'
      ]
    },
    {
      title: fiveTitle,
      collapsable: false,
      sidebarDepth:2,
      children: [
        'indexall/index4allfiles',
        'about/关于'
      ]
    }
  ]

  console.log(sidebar)

  return sidebar
}

