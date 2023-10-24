import { useState, useRef, forwardRef } from 'react';

interface MyInputProps {
  value: string;
}

export function ReferencingValuesWithRefs() {
  return (
    <>
      <Clock />
      <Form />
      <Stopwatch />
      <FormRef />
    </>
  );
}

function Clock() {
  const [startTime, setStartTime] = useState<number | null>(null);
  const [now, setNow] = useState<number | null>(null);
  const intervalRef = useRef<number | null>(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </>
  );
}

function Form() {
  const inputRefOne = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (!inputRefOne.current) {
      return;
    }

    inputRefOne.current.focus();
  }

  return (
    <>
      <input ref={inputRefOne} />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}

function Stopwatch() {
  const [timer, setTimer] = useState<number>(0);

  const intervalID = useRef<number>(0);

  function start() {
    intervalID.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  }

  function stop() {
    clearInterval(intervalID.current);
  }

  return (
    <>
      <p>Current time: {timer}</p>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
    </>
  );
}

function MyInputRef(props: MyInputProps, ref: React.Ref<HTMLInputElement>) {
  return <input {...props} ref={ref} />;
}

const ForwardedMyInput = forwardRef(MyInputRef);

function FormRef() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleClick() {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }

  return (
    <>
      <ForwardedMyInput ref={inputRef} value="" />
      <button onClick={handleClick}>Focus the input</button>
    </>
  );
}
