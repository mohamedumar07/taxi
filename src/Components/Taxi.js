import React from 'react'

import Autocomplete from 'react-autocomplete'

function Input(probs) {

    return(

        <Autocomplete

        items={[
            { label: 'Guindy' },
            { label: 'Little Mount' },
            { label: 'Anna University' },
            { label: 'Adayar' },
            { label: 'Besant nagar' },
            { label: 'Velachery' },
            { label: 'Thriuvaanmayur' }
        ]}

        shouldItemRender={(item, value) => 
            item.label.toLowerCase()
            .indexOf(value.toLowerCase()) > -1}

        getItemValue={item => item.label}
        
        renderItem={(item, isHighlighted) =>
            <div style={{
                background: isHighlighted ?
                    '#bcf5bc' : 'white'
            }}
                key={item.id}>
                {item.label}
            </div>
        }
        value={probs.value}

        onChange={probs.onChange}

        placeholder={probs.placeholder}

        inputProps={{
            placeholder: probs.placeholder
        }}

        onSelect={probs.onSelect}/>
    )
}

export default Input