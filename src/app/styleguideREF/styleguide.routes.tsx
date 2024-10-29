import {Route} from 'react-router-dom';
import {StyleguideLayout} from '@/styleguide/components/StyleguideLayout';
import {StyleguideButtons} from '@/styleguide/pages/StyleguideButtons';
import {StyleguideSpinners} from '@/styleguide/pages/StyleguideSpinners';
import {
  Icon,
  IconStackPush,
  IconTypography,
  IconAlertSquareRounded,
  IconLoader,
  IconSelect,
  IconMarkdown,
  IconTag,
  IconSql,
  IconCheckbox,
  IconBulb,
  IconListCheck,
  IconPalette,
  IconBread,
  IconTableColumn,
  IconCode,
} from '@tabler/icons-react';
import {FunctionComponent} from 'react';
import {StyleguideTypography} from './pages/StyleguideTypography';
import {StyleguideAlerts} from './pages/StyleguideAlerts';
import {StyleguideSelects} from './pages/StyleguideSelects';
import {StyleguideMarkdown} from './pages/StyleguideMarkdown';
import {StyleguideTags} from './pages/StyleguideTags';
import {StyleguideQueryFilters} from './pages/StyleguideQueryFilter';
import {StyleguideSwitches} from './pages/StyleguideSwitches';
import {StyleguideTips} from './pages/StyleguideTips';
import {StyleguideProgress} from './pages/StyleguideProgress';
import {StyleguidePalette} from './pages/StyleguidePalette';
import {StyleguideToasts} from './pages/StyleguideToasts';
import {StyleguidePivotTable} from './pages/StyleguidePivotTable';
import {StyleguideCode} from './pages/StyleguideCode';

export const STYLEGUIDE_ROUTES: {
  title: string;
  slug: string;
  icon: Icon;
  page: () => FunctionComponent;
}[] = [
  {
    title: 'Buttons',
    slug: 'buttons',
    icon: IconStackPush,
    page: () => StyleguideButtons,
  },
  {
    title: 'Palette',
    slug: 'palette',
    icon: IconPalette,
    page: () => StyleguidePalette,
  },
  {
    title: 'Switches',
    slug: 'switches',
    icon: IconCheckbox,
    page: () => StyleguideSwitches,
  },
  {
    title: 'Tags',
    slug: 'tags',
    icon: IconTag,
    page: () => StyleguideTags,
  },
  {
    title: 'Typography',
    slug: 'typography',
    icon: IconTypography,
    page: () => StyleguideTypography,
  },
  {
    title: 'Spinners',
    slug: 'spinners',
    icon: IconLoader,
    page: () => StyleguideSpinners,
  },
  {
    title: 'Alerts',
    slug: 'alerts',
    icon: IconAlertSquareRounded,
    page: () => StyleguideAlerts,
  },
  {
    title: 'Select inputs',
    slug: 'selects',
    icon: IconSelect,
    page: () => StyleguideSelects,
  },
  {
    title: 'Markdown',
    slug: 'markdown',
    icon: IconMarkdown,
    page: () => StyleguideMarkdown,
  },
  {
    title: 'Query filters',
    slug: 'query-filters',
    icon: IconSql,
    page: () => StyleguideQueryFilters,
  },
  {
    title: 'Tips',
    slug: 'tips',
    icon: IconBulb,
    page: () => StyleguideTips,
  },
  {
    title: 'Progress',
    slug: 'progress',
    icon: IconListCheck,
    page: () => StyleguideProgress,
  },
  {
    title: 'Toasts',
    slug: 'toasts',
    icon: IconBread,
    page: () => StyleguideToasts,
  },
  {
    title: 'Pivot table',
    slug: 'pivot-table',
    icon: IconTableColumn,
    page: () => StyleguidePivotTable,
  },
  {
    title: 'Code',
    slug: 'code',
    icon: IconCode,
    page: () => StyleguideCode,
  },
];

export const getStyleguideRoutes = () => (
  <Route path="/styleguide" element={<StyleguideLayout />}>
    {STYLEGUIDE_ROUTES.map(({slug, page}) => (
      <Route key={slug} path={`/styleguide/${slug}`} Component={page()} />
    ))}
  </Route>
);
