<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200509025155 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE annonce (id INT AUTO_INCREMENT NOT NULL, title VARCHAR(255) NOT NULL, content LONGTEXT NOT NULL, set_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE annonce_avatar (annonce_id INT NOT NULL, avatar_id INT NOT NULL, INDEX IDX_76D071318805AB2F (annonce_id), INDEX IDX_76D0713186383B10 (avatar_id), PRIMARY KEY(annonce_id, avatar_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE avatar (id INT AUTO_INCREMENT NOT NULL, file_path VARCHAR(255) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, content LONGTEXT DEFAULT NULL, title VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE client (id INT AUTO_INCREMENT NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, adress LONGTEXT DEFAULT NULL, password VARCHAR(255) NOT NULL, company VARCHAR(255) DEFAULT NULL, phone VARCHAR(255) NOT NULL, paye VARCHAR(255) NOT NULL, postal VARCHAR(255) NOT NULL, city VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, objet VARCHAR(255) NOT NULL, message LONGTEXT NOT NULL, phone VARCHAR(255) NOT NULL, set_at DATE NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit (id INT AUTO_INCREMENT NOT NULL, categorie_id INT NOT NULL, ref VARCHAR(255) NOT NULL, title VARCHAR(255) NOT NULL, content VARCHAR(255) NOT NULL, prix DOUBLE PRECISION NOT NULL, observation LONGTEXT DEFAULT NULL, set_date DATETIME DEFAULT NULL, INDEX IDX_29A5EC27BCF5E72D (categorie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE produit_avatar (produit_id INT NOT NULL, avatar_id INT NOT NULL, INDEX IDX_E125B915F347EFB (produit_id), INDEX IDX_E125B91586383B10 (avatar_id), PRIMARY KEY(produit_id, avatar_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE shop (id INT AUTO_INCREMENT NOT NULL, produit_id INT NOT NULL, client_id INT NOT NULL, quantity DOUBLE PRECISION NOT NULL, type VARCHAR(255) NOT NULL, status TINYINT(1) NOT NULL, delivery LONGTEXT DEFAULT NULL, INDEX IDX_AC6A4CA2F347EFB (produit_id), INDEX IDX_AC6A4CA219EB6921 (client_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE annonce_avatar ADD CONSTRAINT FK_76D071318805AB2F FOREIGN KEY (annonce_id) REFERENCES annonce (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE annonce_avatar ADD CONSTRAINT FK_76D0713186383B10 FOREIGN KEY (avatar_id) REFERENCES avatar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit ADD CONSTRAINT FK_29A5EC27BCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id)');
        $this->addSql('ALTER TABLE produit_avatar ADD CONSTRAINT FK_E125B915F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE produit_avatar ADD CONSTRAINT FK_E125B91586383B10 FOREIGN KEY (avatar_id) REFERENCES avatar (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE shop ADD CONSTRAINT FK_AC6A4CA2F347EFB FOREIGN KEY (produit_id) REFERENCES produit (id)');
        $this->addSql('ALTER TABLE shop ADD CONSTRAINT FK_AC6A4CA219EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE annonce_avatar DROP FOREIGN KEY FK_76D071318805AB2F');
        $this->addSql('ALTER TABLE annonce_avatar DROP FOREIGN KEY FK_76D0713186383B10');
        $this->addSql('ALTER TABLE produit_avatar DROP FOREIGN KEY FK_E125B91586383B10');
        $this->addSql('ALTER TABLE produit DROP FOREIGN KEY FK_29A5EC27BCF5E72D');
        $this->addSql('ALTER TABLE shop DROP FOREIGN KEY FK_AC6A4CA219EB6921');
        $this->addSql('ALTER TABLE produit_avatar DROP FOREIGN KEY FK_E125B915F347EFB');
        $this->addSql('ALTER TABLE shop DROP FOREIGN KEY FK_AC6A4CA2F347EFB');
        $this->addSql('DROP TABLE annonce');
        $this->addSql('DROP TABLE annonce_avatar');
        $this->addSql('DROP TABLE avatar');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE client');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE produit');
        $this->addSql('DROP TABLE produit_avatar');
        $this->addSql('DROP TABLE shop');
        $this->addSql('DROP TABLE user');
    }
}
