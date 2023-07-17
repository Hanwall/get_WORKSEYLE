import { SidebarConfig4Multiple } from 'vuepress/config'
import {
  getYPSXSidebar
} from './shared'

export const Sidebar4Project: SidebarConfig4Multiple = {
  '/initwithmarkdown/ypsx/': getYPSXSidebar('索引文件','谊品生鲜','夜班入门教程','设备使用','关于')
}

