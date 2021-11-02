import { NextPage } from "next";

const login: NextPage = () => {
  return (
    <div className='py-24 h-screen bg-gray-50'>
      <div className="w-1/3 mx-auto rounded-xl">
          <h2 className="text-center text-3xl py-10">Login</h2>
          <div className="grid items-center mb-5">
              <p className="grid-cols-4 my-2">メールアドレス</p>
              <input className="p-2 border rounded-md" />
          </div>
          <div className="grid items-center mb-5">
              <p className="grid-cols-4 my-2">パスワード</p>
              <input className="p-2 border rounded-md" />
          </div>
          <div className="text-center">
            <button className="bg-gray-700 text-gray-50 py-3 px-20 mt-8 rounded-md ">ログイン</button>
          </div>
      </div>
    </div>
  )
}

export default login