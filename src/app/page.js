export default function Home() {
  return (
    <main >
        <h3>
          Home
        </h3>
        <img id="bg" width="1200px" height="900px" src="{{ url_for('video_feed') }}" />
    </main>
  )
}
