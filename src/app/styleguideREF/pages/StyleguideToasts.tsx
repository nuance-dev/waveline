import {FunctionComponent} from 'react';
import {
  StyleguideSection,
  StyleguideTitle,
} from '@/styleguide/components/StyleguideLayout';
import {Button} from '@/components/ui/Button/Button';
import {toast} from 'react-toastify';
import upperFirst from 'lodash/upperFirst';

export const StyleguideToasts: FunctionComponent = () => (
  <>
    <StyleguideTitle>Toasts</StyleguideTitle>

    <StyleguideSection title="Methods">
      <div className="flex gap-3 flex">
        {(['success', 'error', 'info'] as const).map((fnKey) => (
          <Button onClick={() => toast[fnKey]('Foo bar')} key={fnKey} round>
            {upperFirst(fnKey)}
          </Button>
        ))}
      </div>
    </StyleguideSection>
  </>
);
