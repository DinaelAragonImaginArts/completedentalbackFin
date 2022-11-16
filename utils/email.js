import sgMail from '@sendgrid/mail';

export const envio = async (datos) => {
  const { nombre, email, telefono, detalles, confirmacion, fecha, hora } = datos;
  const info = {
    from: 'completedentalmx@gmail.com',
    to: 'completedentalmx@gmail.com',
    subject: `Paciente: ${nombre}`,
    text: `Email: ${email}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Telefono: ${telefono}</p>
    <p>Detalles: ${detalles}</p>
    <p>¿Es el paciente menor de edad? ${confirmacion}</p>
    <p>Dia de la Cita: ${fecha}</p>
    <p>Horario de la cita: ${hora}</p>      
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};

export const cancelacion = async (datos) => {
  const { nombre, email, telefono, detalles, confirmacion} = datos;

  const info = {
    from: 'completedentalmx@gmail.com',
    to: 'completedentalmx@gmail.com',
    subject: `Paciente: ${nombre}`,
    text: `Email: ${email}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Telefono: ${telefono}</p>
    <p>Detalles: ${detalles}</p>
    <p>¿Desea ser contactado para reagendar cita? ${confirmacion}</p>
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};

export const informacion = async (datos) => {
  const { nombre, email, telefono, detalles } = datos;

  const info = {
    from: 'completedentalmx@gmail.com',
    to: 'completedentalmx@gmail.com',
    subject: `Paciente: ${nombre}`,
    text: `Email: ${email}`,
    html: `
    <p>Nombre: ${nombre}</p>
    <p>Email: ${email}</p>
    <p>Telefono:${telefono}</p>
    <p>Detalles: ${detalles}</p>      
    `
  };
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  sgMail
    .send(info)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
};