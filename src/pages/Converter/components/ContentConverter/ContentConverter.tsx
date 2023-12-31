import React, { FC, useState } from 'react';

import { Input, ReverseTabsButton, useInput } from '../../../../components';
import { useWindowDimensions } from '../../../../hooks';
import { CurrenciesData } from '../../../../types/CurrenciesData.types';
import { LineChart } from '../LineChart';
import styles from './ContentConverter.module.scss';

interface ContentConverterProps {
  currenciesData: CurrenciesData;
}

export const ContentConverter: FC<ContentConverterProps> = ({ currenciesData }) => {
  const {
    exchangeInputCourse,
    exchangeConversionInputCourse,

    inputData,

    selectInputTab,
    selectOutputTab,
    reverseTabs,
    changeInput,
  } = useInput(currenciesData);

  const { width: windowWidth } = useWindowDimensions();

  const [isChartOpen, setIsChartOpen] = useState(false);
  const handlerSetIsChartOpen = () => {
    setIsChartOpen((prevState) => !prevState);
  };

  return (
    <div className={styles.content}>
      <div className={styles.content__converter}>
        <Input
          title="У меня есть"
          handleOnClick={selectInputTab}
          selectedCurrency={inputData.inputTab}
          editable
          value={inputData.input}
          onChange={changeInput}
          textBelowInput={exchangeInputCourse}
        />

        <ReverseTabsButton reverseTabs={reverseTabs} isHorizontalView={windowWidth >= 1200} />

        <Input
          title="Хочу приобрести"
          handleOnClick={selectOutputTab}
          selectedCurrency={inputData.outputTab}
          editable={false}
          value={inputData.output}
          textBelowInput={exchangeConversionInputCourse}
        />
      </div>

      <div className={styles.content__chart}>
        <button onClick={handlerSetIsChartOpen}>Show graphics (MVP)</button>

        {isChartOpen && <LineChart />}
      </div>
    </div>
  );
};
