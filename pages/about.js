import Link from 'next/link';

export default function About(){
	const linkStyle = {
  			marginRight: 15
	};

	return (
		<div style={{ margin: "auto auto", width: "600px", textAlign: "center"}}>

			<div>
				<Link href="/">
					<a style={linkStyle}>Home</a>
				</Link>
				<Link href="/about">
					<a style={linkStyle}>About</a>
				</Link>
				<Link href="/funPage">
					<a style={linkStyle}>Fun Page ;)</a>
				</Link>
				<Link href="/unknown">
					<a style={linkStyle}>404 Page</a>
				</Link>

				<p>This is a wicked awesome about page</p>
				<img src="/static/wow.jpeg" style={{ maxWidth: '1500px', maxHeight: '1500px' }} />
			</div>
		</div>
	);
}