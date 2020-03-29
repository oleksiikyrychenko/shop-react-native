import React from 'react';
import { View, Text,  } from 'react-native';
import {Formik} from 'formik';
import { Button, ButtonTitle, Field } from '../../forms/AuthorizationForm/styles';
import * as yup from 'yup';
import {Container, DescriptionField} from './styles';
import Uploader from '../../commonBlocks/Uploader';

const validationSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required!'),
    description: yup.string()
        .required('Description is required '),
    price: yup.string()
        .required('Price is required ')
});

const ProductCreateScreen = () => {
    return (
        <>
            <Uploader />
            <Container>
                <Formik
                    onSubmit={() => {}}
                    initialValues={{}}
                    validationSchema={validationSchema}
                >
                    {({handleSubmit, errors, touched, isSubmitting, handleChange}) => (
                        <View>
                            <View>
                                <Field
                                    name={'title'}
                                    onChangeText={handleChange('title')}
                                    placeholder={'Title'}
                                />
                                <Field
                                    name={'price'}
                                    onChangeText={handleChange('price')}
                                    placeholder={'Price'}
                                    keyboardType='numeric'
                                />
                                <DescriptionField
                                    name={'description'}
                                    onChangeText={handleChange('description')}
                                    placeholder={'Description'}
                                    multiline={true}
                                />
                                {/*{((errors[`${field.name}`] && touched[`${field.name}`]) || !isSubmitting) && (*/}
                                {/*    <ValidationText>{errors[field.name]}</ValidationText>*/}
                                {/*)}*/}
                            </View>
                            <Button onPress={handleSubmit} >
                                <ButtonTitle>Add product</ButtonTitle>
                            </Button>
                        </View>
                    )}
                </ Formik>
            </Container>
        </>
    );
};

export default ProductCreateScreen;
