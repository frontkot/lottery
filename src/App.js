import React, { useState } from 'react';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import Number from './components/Number/Number';

import './App.css';
import './Container.scss';

const checkElems = () => {
    const arr = JSON.parse(localStorage.getItem('numbers'))
    if (arr !== null) {
        return arr
    } else {
      return []
    }
}

const checkLang = () => {
  const lang = JSON.parse(localStorage.getItem('language'))
  if (lang !== null) {
    return lang;
  } else {
    return 'ru';
  }

}

const checkMaxNum = () => {
  const num = JSON.parse(localStorage.getItem('max-numbers'))
  if (num !== null) {
    return num;
  } else {
    return 0;
  }

}


const App = () => {
  const [numbers, setNumbers] = useState(checkElems());
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [maxNumbers, setMaxNumbers] = useState(checkMaxNum());
  const [lang, setLang] = useState(checkLang());

  const ruLang = lang === 'ru';
  const beforeGame = numbers.length === 0;

  const start = () => {
    let arr = numbers;
    const valArr = arr.map(e => e.value)
    let num = randomNumber();
    if (arr.length === maxNumbers) {
      alert(ruLang ? 'Все номера уже выпали! Начните игру заново.' : 'Too much numbers! Reset game.')
    } else {
      while(valArr.includes(num)) {
        num = randomNumber()
      }
      arr.unshift({value: num})
    }
    localStorage.setItem('numbers', JSON.stringify(arr))
    setNumbers(JSON.parse(localStorage.getItem('numbers')))
  }


  const changeLanguage = (lang) => {
    localStorage.setItem('language', JSON.stringify(lang));
    setLang(lang)
  }

  const setLanguage = () => {
    ruLang ? changeLanguage('en') : changeLanguage('ru')
  }

  const loader = (ms) => {
    setIsloading(true)
    setTimeout(() => setIsloading(false), ms)
  }

  const numberLoader = (ms) => {
    setIsNumber(true)
    setTimeout(() => setIsNumber(false), ms)
  }

  const randomNumber = () => {
    const min = 1;
    const max = 100;
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const deleteFromLS = () => {
    let arr = numbers.filter(e => e.value !== +item);
    localStorage.setItem('numbers', JSON.stringify(arr))
    loader(500)
    setTimeout(() => setNumbers(arr), 500)
  }

  const reset = () => {
    localStorage.clear()
    setNumbers([])
    setMaxNumbers(0)
  }

  const maxNumSet = (num) => {
    localStorage.setItem('max-numbers', JSON.stringify(num));
    setMaxNumbers(num)
  }

  
  return (
    <div className="App">
      <Header 
        reset={() => {
          loader(1000)
          setTimeout(() => reset(), 1000)
          }
        }
        className={'header'} 
        content={numbers} 
        ruLang={ruLang}
        maxNumbers={maxNumbers}
        changeLanguage={setLanguage}
        onClick={() => {
          // if(beforeGame) {
          //   setOpenModal(true)
          // }

          // if(openModal) {
          //   maxNumSet()
          // }

          if(!openModal) {
            setTimeout(() => start(), 500)
            if(numbers.length < maxNumbers) {
              loader(500)
              setTimeout(() => numberLoader(1000), 500)
            }
          }
        }
        }
      />
      <Content 
        className={'main-content'} 
        content={numbers} 
        header={numbers.length === 0 ? ruLang ? 'Сыграй в нашу Лотерею!' : 'Play our lottery!' : ruLang ? 'Сыграем еще!' : 'Let`s play again!'}
        maxNumbers={maxNumbers}
        openModal={(e) => {
          setOpenModal(!openModal)
          setItem(e.target.id)
        }}
        setMaxNum={(e) => maxNumSet(e)}
        ruLang={ruLang}
        />
      <Modal 
        header={ruLang ? `Удаление номера ${item}` : `Remove num ${item}`}
        content={beforeGame}
        onClick={() => setOpenModal(!openModal)}
        text={ruLang ? 'Вы хотите удалить данный номер?' : 'Do you want remove this num?'}
        isOpen={openModal}
        ruLang={ruLang}
        deleteNum={() => {
          setOpenModal(!openModal)
          loader(500)
          setTimeout(() => deleteFromLS(), 500)
        }}
      />

      {isLoading && <Loader />}
      {isNumber && <Number content={numbers[0].value} ruLang={ruLang}/>}
    </div>
  );
}

export default App;
