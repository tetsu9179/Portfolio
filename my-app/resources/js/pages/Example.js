import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="login-container">
            <form>
                <h3>Login</h3>
                <hr/>
                <div className="row mb-3">
                    <input 
                        type="email" 
                        name="email" 
                        className="form-control"
                        placeholder='メールアドレス'
                    />
                </div>
                <div className="row mb-3">
                    <input 
                        type="password" 
                        name="password" 
                        className="form-control"
                        placeholder='パスワード'
                    />
                </div>
                <div className='row mb-3'>
                    <button type="submit" className="btn btn-primary">ログイン</button>
                </div>
                <div className='row'>
                    <button type="button" className="btn btn-secondary">パスワードリセット</button>
                </div>
            </form>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
