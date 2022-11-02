import Layout from '@/components/Layout';
import { API_URL } from 'config/index';

export default function HomePage({ events }) {
	return (
		<Layout>
			<h1>Upcoming events</h1>
			{events.lengths === 0 && <h3>No events to show</h3>}
			{events.map((evt) => (
				<h3 key={evt.id}>{evt.name}</h3>
			))}
		</Layout>
	);
}

export async function getStaticProps() {
	const res = await fetch(`${API_URL}/api/events`);
	const events = await res.json();

	return {
		props: { events },
		revalidate: 1,
	};
}
