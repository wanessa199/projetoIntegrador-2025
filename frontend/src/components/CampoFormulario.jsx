function CampoFormulario({ label, type = 'text', placeholder }) {
  return (
    <div className="campo">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} />
    </div>
  )
}

export default CampoFormulario