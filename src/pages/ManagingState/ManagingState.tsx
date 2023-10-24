import { ReactingToInputWithState } from '@components/ManagingState/components/ReactingToInputWithState';
import { ChoosingTheStateStructure } from '@components/ManagingState/components/ChoosingTheStateStructure';
import { SharingStateBetweenComponents } from '@components/ManagingState/components/SharingStateBetweenComponents';
import { PreservingAndResettingState } from '@components/ManagingState/components/PreservingAndResettingState';
import { ExtractingStateLogicIntoReducer } from '@components/ManagingState/components/ExtractingStateLogicIntoReducer';

import THEME from '@components/ManagingState/context/theme';
import { ThemeContext } from '../../components/ManagingState/context/ThemeContext';

function ManagingState() {
  return (
    <>
      <ThemeContext.Provider value={THEME}>
        <ReactingToInputWithState />
        <ChoosingTheStateStructure />
        <SharingStateBetweenComponents />
        <PreservingAndResettingState />
        <ExtractingStateLogicIntoReducer />
      </ThemeContext.Provider>
    </>
  );
}

export default ManagingState;
