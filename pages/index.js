import Layout from '@/components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<h1>Upcoming events</h1>
		</Layout>
	);
}

export async function getServerSideProps() {
	const res = await fetch('/api/events');
}
