const fotos = [
  "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80",
]

export default function Galeria() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-4">
      {fotos.map((src, i) => (
        <div key={i} className="overflow-hidden h-48 md:h-80">
          <img
            src={src}
            alt=""
            className="w-full h-full object-cover"
            style={{filter: 'brightness(0.75)'}}
          />
        </div>
      ))}
    </div>
  )
}
