import os

class BaseConfig:
    """Base configuration"""
    TESTING = False
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(BaseConfig):
    """Dev Config"""
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')


class TestingConfig(BaseConfig):
    """Testing Config"""
    TESTING = True
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_TEST_URL')


class ProductionConfig(BaseConfig):
    SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL')
