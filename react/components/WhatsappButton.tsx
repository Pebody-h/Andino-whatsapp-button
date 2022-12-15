import React from 'react'
import {useCssHandles} from 'vtex.css-handles'
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhatsappButton = ( {logo, phone, message, width, height}: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    const CSS_HANDLES = ["whatsapp_button", "whatsapp_image"];
    const handles = useCssHandles(CSS_HANDLES)

    return (
        <div className={`${handles.whatsapp_button} fixed bottom-2 right-2 flex flexcolum`}>
            <a 
            href={`https://wa.me/${phone}?text=${formattedMessage}`} 
            target='_blank' 
            rel='noreferrer noopener'>
                <img 
                src={logo} 
                width={width} 
                height={height} 
                alt="Logo-Whatsapp"
                className={handles.whatsapp_image}
                />
            </a>
        </div>
    )
}

WhatsappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhatsappButton.defaultProps = {
    logo: "logo.png",
    phone: "+573219369771",
    message: "Bienvenido en que te podemos ayudar?",
    width: 80,
    height: 80
}

WhatsappButton.schema = {
    title: "Botón De Whatsapp",
    type: "object",
    properties: {
        logo: {
            title: "Logo de whatsapp que se relacione con la marca",
            type: "string",
            widget: {
                "ui:widget": "image-uploader"
            }
        },
        phone: {
            title: "Teléfono",
            description: "agrega por favor el número de teléfono",
            type: "string"
        },
        message: {
            title: "Mensaje",
            description: "agrega por favor el mensaje que se verá para tu cliente",
            type: "string",
            widget: {
                "ui:widget": "textarea"
            }
        },
        width: {
            title: "Ancho Icono",
            description: "Numero para el ancho",
            type: "number"
        },
        height: {
            title: "Largo Icono",
            description: "Numero para el Largo",
            type: "number"
        }
    }
}

export default WhatsappButton