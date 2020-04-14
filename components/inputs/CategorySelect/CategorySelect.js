import React from 'react';
import {View, Button, Modal, SafeAreaView, ScrollView, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import { getCategories } from 'store/products/actions';
import {BackButton, BackButtonText, CategoryContainer, Title} from './styles';
import ArrowIcon from 'components/svgIcons/ArrowIcon';
import PropTypes from 'prop-types';

const CategorySelect = ({ getCategories, categories, onSelectCategory }) => {
    const [showModal, setShowModal ] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState({});
    const [prevCategories, setPrevCategories] = React.useState([]);

    React.useEffect(() => {
        if(categories.length === 0) {
            getCategories();
        }
    });

    const onPress = (category) => {
        if(!category.has_children) {
            onSelectCategory(category);
            setSelectedCategory(category);
            return setShowModal(false);
        }

        setPrevCategories([...prevCategories, category.id]);
        getCategories(category.id);
    };

    const handleBackButton = () => {
        if(prevCategories.length === 0) {
            return setShowModal(false);
        }
        const categories = [...prevCategories];
        categories.pop();
        setPrevCategories(categories);
        getCategories(categories.length === 0 ? null : categories[categories.length - 1]);
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={showModal}
                onRequestClose={() => setShowModal(false)}
            >
                <View>
                    <BackButton onPress={handleBackButton}>
                        <BackButtonText>Back</BackButtonText>
                    </BackButton>
                    <SafeAreaView>
                        <ScrollView vertical={true}>
                            {categories.map((category, index) => (
                                <TouchableOpacity key={index} onPress={() => onPress(category)}>
                                    <CategoryContainer>
                                        <Title>{category.title}</Title>
                                        {category.has_children &&
                                            <ArrowIcon
                                                width={'24px'}
                                                height={'24px'}
                                                style={{ transform: [{ rotate: '180deg' }] }}
                                                color={'#000'}
                                            />
                                        }
                                    </CategoryContainer>
                                </TouchableOpacity>
                            ))
                            }
                        </ScrollView>
                    </SafeAreaView>
                </View>
            </Modal>
            <View>
                <Button
                    color="#BF0B0A"
                    title={selectedCategory['title'] ? selectedCategory.title :'Choose category'}
                    onPress={() => setShowModal(true)}
                />
            </View>
        </>
    );  
};

CategorySelect.propTypes = {
    getCategories: PropTypes.func,
    categories: PropTypes.array,
    onSelectCategory: PropTypes.func
};

const mapStateToProps = state => ({
    categories: state.products.categories
});

export default connect(mapStateToProps, { getCategories })(CategorySelect);
