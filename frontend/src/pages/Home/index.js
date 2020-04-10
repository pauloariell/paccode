import React from 'react';

import logoImg from '../../assets/image/logo_paccode.png';
import test from '../../assets/image/test.png';

import './style.css'

export default function Home() {
  return(
    <div className="container">
      <h1>
        PACCode
        <img src={test} alt=""/>
      </h1>
    </div>
    
    // <div className="logon-container">
		// 	<section className="form">
		// 		<img src={logoImg} alt="Be The Hero" />
		// 		<form onSubmit={handleLogin}>
		// 			<h1>Faça seu Logon</h1>

		// 			<input
		// 				placeholder="Sua Id"
		// 				value={id}
		// 				onChange={e => setId(e.target.value)}
		// 			/>
		// 			<button className="button" type="submit">Entrar</button>

		// 			<Link className="back-link" to="/register">
		// 				<FiLogIn size={16} color="#E02041" />
		// 				Não tenho cadastro
		// 			</Link>
		// 		</form>
		// 	</section>
		// 	<img src={heroesImg} alt="Heroes" />
		// </div>
    
  );
}