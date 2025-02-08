import { Button } from '@heroui/react'
import BasePage from '@renderer/components/base/base-page'
import { CgWebsite } from 'react-icons/cg'
import { IoLogoGithub } from 'react-icons/io5'
import WebdavConfig from '@renderer/components/settings/webdav-config'
import GeneralConfig from '@renderer/components/settings/general-config'
import MihomoConfig from '@renderer/components/settings/mihomo-config'
import Actions from '@renderer/components/settings/actions'
import ShortcutConfig from '@renderer/components/settings/shortcut-config'
import SiderConfig from '@renderer/components/settings/sider-config'
import SubStoreConfig from '@renderer/components/settings/substore-config'

const Settings: React.FC = () => {
  return (
    <BasePage
      title="应用设置"
      header={
        <>
          <Button
            isIconOnly
            size="sm"
            variant="light"
            title="官方文档"
            className="app-nodrag"
            onPress={() => {
              window.open('https://mihomo-purity.github.io')
            }}
          >
            <CgWebsite className="text-lg" />
          </Button>
          <Button
            isIconOnly
            size="sm"
            variant="light"
            className="app-nodrag"
            title="GitHub 仓库"
            onPress={() => {
              window.open('https://github.com/mihomo-purity/mihomo-purity')
            }}
          >
            <IoLogoGithub className="text-lg" />
          </Button>
        </>
      }
    >
      <GeneralConfig />
      <SubStoreConfig />
      <SiderConfig />
      <WebdavConfig />
      <MihomoConfig />
      <ShortcutConfig />
      <Actions />
    </BasePage>
  )
}

export default Settings
