import { ChangesArray } from '@components/AddingInteractivity/components/ChangesArray';
import { Counter } from '@components/AddingInteractivity/components/Counter';
import { ReplacingItemsArray } from '@components/AddingInteractivity/components/ReplacingItemsArray';
import { Signup } from '@components/AddingInteractivity/components/Signup';
import { Toolbar } from '@components/AddingInteractivity/components/Toolbar';
import { TransformingAnArray } from '@components/AddingInteractivity/components/TransformingAnArray';
import { UpdatePersonData } from '@components/AddingInteractivity/components/UpdatePersonData';
import { UpdatingArraysState } from '@components/AddingInteractivity/components/UpdatingArraysState';
import { UpdatingObjectsInsideArrays } from '@components/AddingInteractivity/components/UpdatingObjectsInsideArrays';
import { UpdatingStateMultipleTimes } from '@components/AddingInteractivity/components/UpdatingStateMultipleTimes';

function AddingInteractivity() {
  return (
    <>
      <Counter />
      <Toolbar />
      <Signup />
      <UpdatingStateMultipleTimes />
      <UpdatePersonData />
      <UpdatingArraysState />
      <TransformingAnArray />
      <ReplacingItemsArray />
      <ChangesArray />
      <UpdatingObjectsInsideArrays />
    </>
  );
}

export default AddingInteractivity;
