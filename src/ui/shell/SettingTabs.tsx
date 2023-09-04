import {
  IconCat,
  IconPawFilled,
  IconInfoCircle,
  IconSettings,
  IconBuildingStore,
} from '@tabler/icons-react';
import { useTranslation } from 'react-i18next';
import SettingTab from './SettingTab';
import { memo, useMemo } from 'react';
import { ISettingTabsProps } from '../../types/components/type';
import { useSettingTabStore } from '../../hooks/useSettingTabStore';

function SettingTabs({ activeTab }: ISettingTabsProps) {
  const { setActiveTab } = useSettingTabStore();
  const { t } = useTranslation();

  const tabs = useMemo(() => {
    return [
      { Icon: <IconCat size="1rem" />, label: t('My Pets') },
      { Icon: <IconBuildingStore size="1rem" />, label: t('Pet Shop') },
      { Icon: <IconSettings size="1rem" />, label: t('Settings') },
      { Icon: <IconInfoCircle size="1rem" />, label: t('About') },
    ]
  }, [t]);

  const sections = tabs.map((tab, index) => <SettingTab {...tab} key={tab.label} active={index === activeTab} handleSetTab={() => setActiveTab(index)} />);

  return <>{sections}</>;
}

export default memo(SettingTabs);