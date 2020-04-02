import React from 'react';
import { View } from 'react-native';
import { Formik } from 'formik';
import { Button, ButtonTitle, Field } from '../../forms/AuthorizationForm/styles';
import * as yup from 'yup';
import {Container, DescriptionField} from './styles';
import Uploader from '../../commonBlocks/Uploader';
import CategorySelect from '../../inputs/CategorySelect';
import {connect} from 'react-redux';
import {createProduct} from '../../../store/products/actions';

const validationSchema = yup.object().shape({
    title: yup.string()
        .required('Title is required!'),
    description: yup.string()
        .required('Description is required '),
    price: yup.string()
        .required('Price is required ')
});

const ProductCreateScreen = ({ createProduct, navigation, authUser }) => {
    const [category, setCategory] = React.useState(null);
    const [images, setImages] = React.useState([]);

    const onSubmit = async (values) => {
        const files = [];
        images.map(item => files.push('data:image/jpeg;base64,' + item.data));
        const data = {
            ...values,
            category_id: category.id,
            files: files,
            // TODO: auth user should be here
            owner_id: 1
        };

        await createProduct(data);
        navigation.navigate('Home');
    };

    return (
        <>
            <Uploader handleImages={(files) => setImages(files)} />
            <CategorySelect onSelectCategory={(category) => setCategory(category)}/>
            <Container>
                <Formik
                    onSubmit={onSubmit}
                    initialValues={{ title: '', description: '', price: '' }}
                    validationSchema={validationSchema}
                >
                    {({handleSubmit, handleChange, errors}) => (
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

const mapStateToProps = state => ({
    authUser: state.auth.user
});

export default connect(mapStateToProps, { createProduct })(ProductCreateScreen);
