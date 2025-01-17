import Link from 'next/link';

const linkStyle = {
	marginRight: 15
};

const Header = () => (
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
        <br />
    </div>
);

export default Header;