import React from 'react';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <div>
       안녕하세요^^ 메인페이지입니다~!
      </div>
      <br/>
      <div>
        <Link href='/users'>
          <a>
            유저정보
          </a>
        </Link>
      </div>
      <br/>
      <div>
        <Link href='/users/join'>
          <a>
            회원가입
          </a>
        </Link>
      </div>
    </>
  )
};

export default Home;